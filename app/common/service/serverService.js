class ServerService {
	constructor( $http, apiUrl ) {
		this.http = $http;
		this.apiUrl = apiUrl;
		this.baseUrl = `${this.apiUrl}/servers`;
	}

	getServerStatus( refresh ) {
		let url = `${this.baseUrl}/status`;

		if( refresh ) {
			window.defaultCache.keys().forEach(key => {
				if( key.indexOf( url ) !== -1 ) {
					window.defaultCache.remove( key );
				}
			});
		}

		return this.http.get( url ).then(result => result.data);
	}

	getServerDetails( id ) {
		return this.http.get( `${this.baseUrl}/status/${id}` ).then(result => result.data);
	}

	getServerStatusLite() {
		return this.http.get( `${this.baseUrl}/status-lite` ).then(result => result.data);
	}

	static factory( $http, apiUrl ) {
		return new ServerService( $http, apiUrl );
	}
}

ServerService.$inject = ["$http", "apiUrl"];

export default ServerService;