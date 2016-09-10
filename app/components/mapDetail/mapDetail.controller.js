class MapDetailController {
	constructor( $routeParams, Map ) {
		this.routeParams = $routeParams;
		this.id = this.routeParams.id;
		this.map = Map.forId( this.id );
		this.init();
	}

	init() {
		this.map.load();
		this.map.loadActivity();
		this.map.loadTopPlayers();
		this.map.loadCheckpointRecords();
		this.map.loadBonusRecords();
	}

	hasRecords() {
		return this.map.records.checkpoints.length || this.map.records.bonuses.length;
	}
}

MapDetailController.$inject = ["$routeParams", "Map"];

export default MapDetailController;