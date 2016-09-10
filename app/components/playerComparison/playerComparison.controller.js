class PlayerComparisonController {
	constructor( $location, $parse, Player, SearchService ) {
		this.location = $location;
		this.parse = $parse;
		this.profileFactory = Player;
		this.searchService = SearchService;

		this.playerIds = this.location.search().player || [];
		this.playerIds = angular.isArray( this.playerIds ) ? this.playerIds: [this.playerIds];
		this.initialLoadComplete = false;
		this.players = [];

		this.init();
	}

	init() {
		for( let id of this.playerIds ) {
			this.loadPlayer( id );
		}

		this.initialLoadComplete = true;
	}

	loadPlayer( playerId, label ) {
		if( label === "No results found." || ( this.initialLoadComplete && this.playerIds.indexOf( playerId.toString() ) !== -1 ) ) {
			this.search = "";
			return;
		}

		this.profileFactory.forId( playerId ).loadProfile( false ).then(profile => {
			this.search = "";
			this.players.push( profile );

			if( this.playerIds.indexOf( profile.id ) === -1 ) {
				this.playerIds.push( profile.id );
				this.location.search("player", this.playerIds);
			}
		});
	}

	removePlayer( player ) {
		let playerId = player.id,
			playerIdx = this.players.indexOf( player ),
			searchIdx = this.playerIds.indexOf( playerId );

		this.players.splice(playerIdx, 1);
		this.playerIds.splice(searchIdx, 1);
		this.location.search("player", this.playerIds);
	}

	getSearchResults( value ) {
		return this.searchService.searchPlayers( value ).then(results => {
			if( !results || !results.length ) {
				results = [{ name: "No results found." }];
			}

			return results;
		})
	}

	isBest( player, prop, prefer ) {
		let values = this.players.map((p) => +this.parse(prop)(p)),
			playerValue = +this.parse(prop)(player);
		
		let best = Math[ prefer ].apply( Math, values );

		return best === playerValue;
	}

	reset() {
		this.search = "";
		this.searching = false;
	}
}

PlayerComparisonController.$inject = ["$location", "$parse", "Player", "SearchService"];

export default PlayerComparisonController;