import RecordSet from "app/common/model/recordSet";

class TopRecordsController {
	constructor( StatService ) {
		this.statService = StatService;
		this.records = new RecordSet( null, this.loadRecords.bind( this ) );
		this.init();
	}

	init() {
		this.records.loadPage(1);
	}

	loadRecords( page ) {
		return this.statService.getTopRecordsByType( this.type, page );
	}

	getRank( index ) {
		let rank = index + 1;

		if( this.records.currentPage !== 1 ) {
			rank += ( ( this.records.currentPage - 1 ) * this.records.pageSize );
		}

		return rank;
	}
}

TopRecordsController.$inject = ["StatService"];

export default TopRecordsController;