class <%= upCaseName %>Service {
	constructor( $http, apiUrl ) {
		this.http = $http;
		this.apiUrl = apiUrl;
	}

	static factory( $http, apiUrl ) {
		return new <%= upCaseName %>Service( $http, apiUrl );
	}
}

<%= upCaseName %>Service.$inject = ["$http", "apiUrl"];

export default <%= upCaseName %>Service;