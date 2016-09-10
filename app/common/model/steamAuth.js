class SteamAuth {

	constructor() {
		this._profile = { player: {}, steam: {} };
		this._loggedIn = false;
		this._loggingIn = false;
		this._failedLogin = false;
	}

	get profile() {
		return {
			avatar: this._profile.steam.avatarfull,
			name: this._profile.player.name,
			id: this._profile.player.id
		};
	}

	get playerProfile() {
		return this._profile.player;
	}

	get steamProfile() {
		return this._profile.steam;
	}

	get loggedIn() {
		return this._loggedIn;
	}

	get loggingIn() {
		return this._loggingIn;
	}

	get failedLogin() {
		return this._failedLogin;
	}

	startLogin() {
		this._loggingIn = true;
		this._failedLogin = false;

		// if we have a playerId, let's pre-populate it so that we can cache our http calls
		let playerId = localStorage.getItem("cgn:playerid");

		if( playerId ) {
			this._profile.player.id = playerId;
		}
	}

	login( profile ) {
		if( !profile || !profile.player ) {
			this._loggedIn = false;
			this._loggingIn = false;
			this._failedLogin = true;
			return;
		}

		this._profile = profile;
		this._loggedIn = true;
		this._loggingIn = false;
		localStorage.setItem("cgn:steamid", profile.player.steamid );
		localStorage.setItem("cgn:playerid", profile.player.id );
	}

	logout() {
		this._loggedIn = false;
		this._profile = { player: {}, steam: {} };
		localStorage.removeItem("cgn:steamid");
		localStorage.removeItem("cgn:playerid");
	}

}

export default SteamAuth;