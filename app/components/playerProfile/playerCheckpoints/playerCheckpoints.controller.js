class PlayerCheckpointsController {
	constructor( Info, HelperService ) {
		this.info = Info;
		this.helperService = HelperService;
		this.init();
	}

	init() {
		this.checkpoints.loadPage(1);
		this.selected = "completed";
	}

	getPercentage() {
		return this.helperService.getPercentage( this.checkpointCount || 0, this.info[ this.key ] );
	}

	isSelected( section ) {
		return this.selected === section;
	}

	showCompleted() {
		if( this.isSelected( "completed" ) ) {
			return;
		}

		this.selected = "completed";
		this.checkpoints.loadPage(1);
	}

	showIncomplete() {
		if( this.isSelected( "incomplete" ) ) {
			return;
		}

		this.selected = "incomplete";
		this.incompleteCheckpoints.loadPage(1);
	}
}

PlayerCheckpointsController.$inject = ["Info", "HelperService"];

export default PlayerCheckpointsController;