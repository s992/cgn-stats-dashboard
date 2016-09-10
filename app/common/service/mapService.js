class MapService {
	constructor( $http, apiUrl ) {
		this.http = $http;
		this.apiUrl = apiUrl;
		this.baseUrl = `${this.apiUrl}/maps`;
	}

	getBigList( page, sortBy, sortDirection ) {
		return this.http.get(`${this.baseUrl}/list?page=${page}${sortBy ? "&sortBy="+sortBy : ""}${sortDirection ? "&direction="+sortDirection : ""}`).then(result => result.data);
	}

	searchBigList( search, page, sortBy, sortDirection ) {
		return this.http.get(`${this.baseUrl}/list${search ? "/"+search : ""}?page=${page}${sortBy ? "&sortBy="+sortBy : ""}${sortDirection ? "&direction="+sortDirection : ""}`).then(result => result.data);
	}

	getMap( mapId ) {
		return this.http.get( `${this.baseUrl}/${mapId}` ).then(result => {
			result.data.lastPlayed = window.moment.utc( result.data.lastPlayed ).toDate();
			result.data.playerCompletionDate = window.moment.utc( result.data.playerCompletionDate ).toDate();
			result.data.groups = this.getGroups( result.data.completions, result.data.tier );
			result.data.top10 = this.getTop10Points( result.data.tier );
			return result.data;
		});
	}

	getCompletions( id, page = 1 ) {
		return this.http.get( `${this.baseUrl}/${id}/completions/map?page=${page}` ).then(result => {
			result.data.records = this.translateCompletions( result.data.records );
			return result.data;
		});
	}

	searchCompletions( id, search, page = 1 ) {
		return this.http.get( `${this.baseUrl}/${id}/completions/map${search ? "/"+search : ""}?page=${page}` ).then(result => {
			result.data.records = this.translateCompletions( result.data.records );
			return result.data;
		});
	}

	getRun( id, playerId ) {
		return this.http.get( `${this.baseUrl}/${id}/run/${playerId}` ).then(result => result.data);
	}

	getActivity( id ) {
		return this.http.get( `${this.baseUrl}/${id}/activity` ).then(result => {
			return this.translateActivity( result.data );
		});
	}

	getTopPlayers( id ) {
		return this.http.get( `${this.baseUrl}/${id}/top` ).then(result => result.data);
	}

	getCheckpointRecords( id ) {
		return this.http.get( `${this.baseUrl}/${id}/records/checkpoint` ).then(result => {
			return this.translateCompletions( result.data );
		});
	}

	getBonusRecords( id ) {
		return this.http.get( `${this.baseUrl}/${id}/records/bonus` ).then(result => {
			return this.translateCompletions( result.data );
		});
	}
	
	translateCompletions( completions ) {
		angular.forEach( completions, function( completion ) {
			completion.completionDate = window.moment.utc( completion.completionDate ).toDate();
		});

		return completions;
	}

	translateActivity( activity ) {
		for( let act of activity ) {
			act.activityDate = window.moment.utc( act.activityDate ).toDate();
		}

		return activity;
	}

	getGroups( completions, tier ) {
		let groupCompletions = completions,
			groups = [];

		for( let i = 0; i < 5; i++ ) {
			let group = { group: i + 1 };
			groupCompletions = groupCompletions + 10;
			groupCompletions = Math.floor( groupCompletions / 2 );

			if( groupCompletions < 11 ) {
				break;
			}

			group.points = this.getGroupPoints( groupCompletions, completions, tier );
			group.rank = groupCompletions;
			groups.push( group );
		}

		groups = groups.reverse();

		let previousRank = 0;

		for( let group of groups ) {
			group.lowerLimit = previousRank + 1;
			previousRank = group.rank;
		}

		return groups;
	}

	getGroupPoints( rankLimit, completions, tier ) {
		let groupCompletions = completions,
			points = 0,
			i = 0;

		for( ; i < 5; i++ ) {
			groupCompletions = groupCompletions + 10;
			groupCompletions = Math.floor( groupCompletions / 2 );

			if( groupCompletions < 11 || rankLimit > groupCompletions ) {
				break;
			}
		}

		if( i > 0 ) {
			points = ( ( 0.010 * tier ) * Math.pow( 2, i - 1 ) ) * completions;
		}

		return points.toFixed( 1 );
	}

	getTop10Points( tier ) {
		let top = [];

		for( let i = 1; i <= 10; i++ ) {
			let points = ( Math.pow( i, 2 ) - ( 21 * i ) + 70 ) * tier + 350;
			top.push( points );
		}

		return top;
	}

	static factory( $http, apiUrl ) {
		return new MapService( $http, apiUrl );
	}
}

MapService.$inject = ["$http", "apiUrl"];

export default MapService;