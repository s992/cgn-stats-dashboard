class PlayerService {
	constructor( $http, apiUrl ) {
		this.http = $http;
		this.apiUrl = apiUrl;
		this.baseUrl = `${this.apiUrl}/players`;
	}

	getBigList( page ) {
		return this.http.get(`${this.baseUrl}/list?page=${page}`).then(result => result.data);
	}

	getProfile( id ) {
		return this.http.get(`${this.baseUrl}/${id}`).then(result => {
			result.data.lastSeen = window.moment.utc( result.data.lastSeen ).toDate();
			return result.data;
		});
	}

	getActivity( id ) {
		return this.http.get(`${this.baseUrl}/${id}/activity`).then(result => {
			return this.translateActivity( result.data );
		});
	}

	getAllPlayerActivity( refresh ) {
		let url = `${this.baseUrl}/activity`;

		if( refresh ) {
			window.defaultCache.keys().forEach(key => {
				if( key.indexOf( url ) !== -1 ) {
					window.defaultCache.remove( key );
				}
			});
		}

		return this.http.get( url ).then(result => {
			return this.translateActivity( result.data );
		});
	}

	getCompletedMaps( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/maps?page=${page}`).then(result => result.data);
	}

	searchCompletedMaps( id, mapName, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/maps${mapName ? "/"+mapName : ""}?page=${page}`).then(result => result.data);
	}

	getIncompleteMaps( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/maps/incomplete?page=${page}`).then(result => result.data);
	}

	searchIncompleteMaps( id, mapName, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/maps/incomplete${mapName ? "/"+mapName : ""}?page=${page}`).then(result => result.data);
	}

	getCompletedCheckpoints( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/checkpoints?page=${page}`).then(result => result.data);
	}

	searchCompletedCheckpoints( id, mapName, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/checkpoints${mapName ? "/"+mapName : ""}?page=${page}`).then(result => result.data);
	}

	getIncompleteCheckpoints( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/checkpoints/incomplete?page=${page}`).then(result => result.data);
	}

	searchIncompleteCheckpoints( id, mapName, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/checkpoints/incomplete${mapName ? "/"+mapName : ""}?page=${page}`).then(result => result.data);
	}

	getCompletedBonuses( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/bonuses?page=${page}`).then(result => result.data);
	}

	searchCompletedBonuses( id, mapName, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/bonuses${mapName ? "/"+mapName : ""}?page=${page}`).then(result => result.data);
	}

	getIncompleteBonuses( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/bonuses/incomplete?page=${page}`).then(result => result.data);
	}

	searchIncompleteBonuses( id, mapName, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/bonuses/incomplete${mapName ? "/"+mapName : ""}?page=${page}`).then(result => result.data);
	}

	getMapRecords( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/record/map?page=${page}`).then(result => result.data);
	}

	getStageRecords( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/record/stage?page=${page}`).then(result => result.data);
	}

	getBonusRecords( id, page = 1 ) {
		return this.http.get(`${this.baseUrl}/${id}/record/bonus?page=${page}`).then(result => result.data);
	}

	getFavoriteMaps( id ) {
		return this.http.get(`${this.baseUrl}/${id}/favorites`).then(result => result.data);
	}

	translateActivity( activity ) {
		for( let act of activity ) {
			act.activityDate = window.moment.utc( act.activityDate ).toDate();
		}

		return activity;
	}

	static factory( $http, apiUrl ) {
		return new PlayerService( $http, apiUrl );
	}
}

PlayerService.$inject = ["$http", "apiUrl"];

export default PlayerService;