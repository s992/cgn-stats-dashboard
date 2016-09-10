class PlayerMapsController {
	constructor( Info, HelperService ) {
		this.info = Info;
		this.helperService = HelperService;
		this.init();
	}

	init() {
		this.maps.loadPage(1);
		this.selected = "completed";
	}

	getPercentage() {
		return this.helperService.getPercentage( this.mapCount || 0, this.info.maps );
	}

	isSelected( section ) {
		return this.selected === section;
	}

	showCompleted() {
		if( this.isSelected( "completed" ) ) {
			return;
		}

		this.selected = "completed";
		this.maps.loadPage(1);
	}

	showIncomplete() {
		if( this.isSelected( "incomplete" ) ) {
			return;
		}

		this.selected = "incomplete";
		this.incompleteMaps.loadPage(1);
	}
}

PlayerMapsController.$inject = ["Info", "HelperService"];

export default PlayerMapsController;