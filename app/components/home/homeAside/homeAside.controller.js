class HomeAsideController {
	constructor( ServerService, PlayerService, SteamService, SteamAuth ) {
		this.serverService = ServerService;
		this.playerService = PlayerService;
		this.steamService = SteamService;
		this.auth = SteamAuth;
		this.init();
	}

	init() {
		this.loadServerStatus();
		this.loadActivity();
	}

	loadServerStatus() {
		this.serverService.getServerStatus().then(result => {
			this.servers = result;
		});
	}

	loadActivity( refresh ) {
		this.playerService.getAllPlayerActivity( refresh ).then(result => {
			this.activity = result;
		});
	}

	refreshActivity() {
		this.activity = [];
		this.loadActivity( true );
	}

	login() {
		this.steamService.login();
	}

	logout() {
		this.steamService.logout();
	}
}

HomeAsideController.$inject = ["ServerService", "PlayerService", "SteamService", "SteamAuth"];

export default HomeAsideController;