class SteamService {
	constructor( $http, apiUrl, SteamAuth, $interval ) {
		this.http = $http;
		this.apiUrl = apiUrl;
		this.auth = SteamAuth;
		this.interval = $interval;
		this.baseUrl = `${this.apiUrl.replace("/surf", "")}/steam`;
	}

	getProfiles( steamIds ) {
		steamIds = angular.isArray( steamIds ) ? steamIds.join(",") : steamIds;
		return this.http.get( `${this.baseUrl}/profiles/${steamIds}` ).then(result => result.data);
	}

	login() {
		this.auth.logout();
		this.auth.startLogin();

		let steamWindow = window.open( `${this.baseUrl}/login`, "_blank" );

		window.addEventListener("message", event => {
			this.loadProfile( event.data );
			steamWindow.close();
		});
	}

	logout() {
		this.auth.logout();
	}

	loadProfile( steamId ) {
		this.auth.startLogin();
		this.http.get( `${this.baseUrl}/profile/${steamId}` ).then(response => {
			this.auth.login( response.data );
		});
	}

	static factory( $http, apiUrl, SteamAuth, $interval ) {
		return new SteamService( $http, apiUrl, SteamAuth, $interval );
	}
}

SteamService.$inject = ["$http", "apiUrl", "SteamAuth", "$interval"];

export default SteamService;