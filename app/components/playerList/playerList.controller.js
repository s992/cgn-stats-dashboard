import RecordSet from "app/common/model/recordSet";

class PlayerListController {
	constructor( PlayerService, SteamService ) {
		this.playerService = PlayerService;
		this.steamService = SteamService;
		this.players = new RecordSet( null, this.playerService.getBigList.bind( this.playerService ) );
		this.players.pageSize = 25;
		this.init();
	}

	init() {
		this.players.loadPage(1);
	}
}

PlayerListController.$inject = ["PlayerService", "SteamService"];

export default PlayerListController;