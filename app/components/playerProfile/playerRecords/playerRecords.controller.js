class PlayerRecordsController {
	constructor() {
		this.init();
	}
	init() {
		this.records.loadPage(1);
	}
}

PlayerRecordsController.$inject = [];

export default PlayerRecordsController;