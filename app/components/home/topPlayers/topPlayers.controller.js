import RecordSet from "app/common/model/recordSet";

class TopPlayersController {
	constructor( StatService ) {
		this.statService = StatService;
		this.players = new RecordSet( null, this.statService.getTopPlayers.bind( this.statService ) );
		this.init();
	}

	init() {
		this.players.loadPage(1);
	}

	getRank( index ) {
		let rank = index + 1;

		if( this.players.currentPage !== 1 ) {
			rank += ( ( this.players.currentPage - 1 ) * this.players.pageSize );
		}

		return rank;
	}
}

TopPlayersController.$inject = ["StatService"];

export default TopPlayersController;