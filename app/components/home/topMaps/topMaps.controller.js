import RecordSet from "app/common/model/recordSet";

class TopMapsController {
	constructor( StatService ) {
		this.statService = StatService;
		this.maps = new RecordSet( null, this.statService.getTopMaps.bind( this.statService ) );
		this.init();
	}

	init() {
		this.maps.loadPage(1);
	}

	getRank( index ) {
		let rank = index + 1;

		if( this.maps.currentPage !== 1 ) {
			rank += ( ( this.maps.currentPage - 1 ) * this.maps.pageSize );
		}

		return rank;
	}
}

TopMapsController.$inject = ["StatService"];

export default TopMapsController;