class RunController {
	constructor( $routeParams, $location, MapService, Map ) {
		this.routeParams = $routeParams;
		this.location = $location;
		this.mapService = MapService;
		this.mapId = this.routeParams.map;
		this.map = Map.forId( this.mapId );
		this.playerIds = this.location.search().player;
		this.playerIds = angular.isArray( this.playerIds ) ? this.playerIds: [this.playerIds];
		this.initialLoadComplete = false;
		this.runs = [];
		this.init();
	}

	init() {
		this.map.load();

		for( let id of this.playerIds ) {
			this.loadRun( id );
		}

		this.initialLoadComplete = true;
	}

	loadRun( playerId, label ) {
		if( label === "No results found." || ( this.initialLoadComplete && this.playerIds.indexOf( playerId ) !== -1 ) ) {
			this.search = "";
			return;
		}

		this.mapService.getRun( this.mapId, playerId ).then(run => {
			this.search = "";
			this.runs.push( run );

			if( this.playerIds.indexOf( run.id.toString() ) === -1 ) {
				this.playerIds.push( run.id );
				this.location.search("player", this.playerIds);
			}
		});
	}

	getSearchResults( value ) {
		return this.mapService.searchCompletions( this.mapId, value ).then(results => {
			if( !results.records || !results.records.length ) {
				results.records = [{ name: "No results found." }];
			}

			return results.records;
		});
	}

	reset() {
		this.search = "";
		this.searching = false;
	}
}

RunController.$inject = ["$routeParams", "$location", "MapService", "Map"];

export default RunController;