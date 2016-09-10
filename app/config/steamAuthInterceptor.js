let SteamAuthInterceptor = ( SteamAuth ) => {
	return {
		request: ( config ) => {
			if( config.url.indexOf(".html") !== -1 || !SteamAuth.profile.id ) {
				return config;
			}

			let joiner = config.url.indexOf("?") === -1 ? "?" : "&";

			config.url = `${config.url}${joiner}__pid=${SteamAuth.profile.id}`;

			return config;
		}
	};
}

SteamAuthInterceptor.$inject = ["SteamAuth"];

export default SteamAuthInterceptor;