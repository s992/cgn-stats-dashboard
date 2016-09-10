class SearchController {
	constructor( $location, SearchService ) {
		this.location = $location;
		this.searchService = SearchService;
		this.init();
	}
	init() {
		this.reset();
	}
	reset() {
		this.search = "";
		this.searching = false;
	}
	getSearchResults( value ) {
		this.searching = true;

		return this.searchService.search( value ).then(result => {
			this.searching = false;

			if( !result || !result.length ) {
				result = [{ name: "No results found." }];
			}

			return result;
		});
	}
	navigate( item, model, label ) {
		if( label === "No results found." ) {
			this.search = "";
			return;
		}

		this.search = "";
		this.location.path( `${item.type}/${item.id}` );
	}
}

SearchController.$inject = ["$location", "SearchService"];

export default SearchController;