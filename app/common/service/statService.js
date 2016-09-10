class StatService {
	constructor(http, apiUrl) {
		this.http = http;
		this.apiUrl = apiUrl;
	}

	getTopPlayers( page = 1 ) {
		return this.http.get(`${this.apiUrl}/players?page=${page}`).then(result => result.data);
	}

	getTopMaps( page = 1 ) {
		return this.http.get(`${this.apiUrl}/maps?page=${page}`).then(result => result.data);
	}

	getTopRecords( page = 1 ) {
		return this.http.get(`${this.apiUrl}/records?page=${page}`).then(result => result.data);
	}

	getTopRecordsByType( type, page = 1 ) {
		return this.http.get(`${this.apiUrl}/records/${type}?page=${page}`).then(result => result.data);
	}

	static factory($http, apiUrl) {
		return new StatService($http, apiUrl);
	}
}

StatService.$inject = ["$http", "apiUrl"];

export default StatService