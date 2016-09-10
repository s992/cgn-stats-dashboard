class SearchService {
	constructor( $http, apiUrl ) {
		this.http = $http;
		this.apiUrl = apiUrl;
		this.baseUrl = `${this.apiUrl}/search`;
	}

	search( value ) {
		return this.http.get( `${this.baseUrl}/${value}` ).then(result => result.data);
	}

	searchPlayers( value ) {
		return this.http.get( `${this.baseUrl}/player/${value}` ).then(result => result.data);
	}

	static factory( $http, apiUrl ) {
		return new SearchService( $http, apiUrl );
	}
}

SearchService.$inject = ["$http", "apiUrl"];

export default SearchService;