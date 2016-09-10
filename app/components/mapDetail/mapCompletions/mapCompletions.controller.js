class MapCompletionsController {
	constructor() {
		this.wr = 0;
		this.init();
	}

	init() {
		this.completions.loadPage(1).then(records => {
			this.wr = records[0].time;
		});
	}

	getTimeDiff( time, record ) {
		return ( parseFloat( time ) - parseFloat( record ) );
	}
}

MapCompletionsController.$inject = [];

export default MapCompletionsController;