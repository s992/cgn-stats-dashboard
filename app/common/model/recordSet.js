class RecordSet {
	constructor( searchProvider, pageProvider ) {
		this.providers = {
			search: searchProvider,
			page: pageProvider
		};

		this._records = [];
		this.visibleRecords = [];
		this.pagesLoaded = [];
		this.currentPage = 1;
		this.pageSize = 10;
		this.totalRecords = 0;
		this.currentSearchString = "";
		this.loaded = false;
		this.loading = false;
		this.sort = {
			by: "",
			direction: ""
		};
	}

	get records() {
		return this.visibleRecords;
	}

	get pages() {
		return Math.ceil( this.totalRecords / this.pageSize );
	}

	addRecords( records ) {
		this.totalRecords = records.count[0].rows;
		records = records.records;

		if( !this.isPageLoaded( this.currentPage ) ) {
			this._records = this._records.concat( records );
		}

		this.setVisibleRecords( this.currentPage );
		this.loaded = true;
		this.loading = false;
	}

	clearRecords() {
		this._records = [];
		this.pagesLoaded = [];
		this.currentPage = 1;
	}

	setVisibleRecords( page ) {
		this.visibleRecords = this._records.slice( ( page - 1 ) * this.pageSize, this.pageSize * page );
		this.visitPage( page );
	}

	isPageLoaded( page ) {
		return this.pagesLoaded.indexOf( page ) !== -1;
	}

	visitPage( page ) {
		if( !this.isPageLoaded( page ) ) {
			this.pagesLoaded.push( page );
		}
	}

	nextPage() {
		if( !this.canGoNext() ) {
			return;
		}

		this.currentPage++;
		this.navigateTo( this.currentPage );
	}

	previousPage() {
		if( !this.canGoPrevious() ) {
			return;
		}

		this.currentPage--;
		this.navigateTo( this.currentPage );
	}

	navigateTo( page ) {
		this.currentPage = page;

		if( this.isPageLoaded( page ) ) {
			this.setVisibleRecords( page );
		} else if( this.currentSearchString.length ) {
			this.search( this.currentSearchString );
		} else {
			this.loadPage( page );
		}
	}

	loadPage( page ) {
		this.loading = true;

		return this.providers.page( page, this.sort.by, this.sort.direction ).then(records => {
			this.addRecords( records );
			return this._records;
		});
	}

	search( searchString ) {
		this.loading = true;

		if( searchString !== this.currentSearchString ) {
			this.clearRecords();
		}

		this.currentSearchString = angular.isDefined( searchString ) ? searchString : "";

		this.providers.search( this.currentSearchString, this.currentPage, this.sort.by, this.sort.direction ).then(records => {
			this.addRecords( records );
		});
	}

	canGoNext() {
		return !this.isLastPage();
	}

	canGoPrevious() {
		return this.currentPage > 1;
	}

	isLastPage() {
		return this.currentPage === this.pages;
	}

	setSort( by, direction = "asc", reload = true ) {
		this.sort = {
			by,
			direction
		};

		if( reload ) {
			this.clearRecords();
			this.navigateTo(1);
		}
	}
}

export default RecordSet;