class HelperService {
	getPercentage( count, total ) {
		if( !count || !total || total == 0 ) {
			return 0;
		}

		let percent = ( count / total ) * 100;

		return percent > 100 ? 100 : percent;
	}

	static factory() {
		return new HelperService();
	}
}

HelperService.$inject = [];

export default HelperService;