class SteamAuthWidget {
	constructor( SteamService, SteamAuth ) {
		this.steamService = SteamService;
		this.auth = SteamAuth;
	}

	login() {
		this.steamService.login();
	}

	logout() {
		this.steamService.logout();
	}
}

SteamAuthWidget.$inject = ["SteamService", "SteamAuth"];

export default SteamAuthWidget;