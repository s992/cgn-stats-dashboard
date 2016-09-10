class InfoService {
	constructor( $http, apiUrl, Info ) {
		this.http = $http;
		this.apiUrl = apiUrl;
		this.info = Info;
	}

	loadInfo() {
		return this.http.get( `${this.apiUrl}/info` ).then(result => {
			this.info.populate( result.data );
		});
	}

	static factory( $http, apiUrl, Info ) {
		return new InfoService( $http, apiUrl, Info );
	}
}

InfoService.$inject = ["$http", "apiUrl", "Info"];

export default InfoService;