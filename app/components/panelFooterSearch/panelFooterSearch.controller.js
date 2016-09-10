class PanelFooterSearchController {
	constructor( SteamAuth ) {
		this.auth = SteamAuth;
		this.init();
	}

	init() {
		this.searchModel = {
			query: ""
		};

		this.searchOptions = {
			updateOn: "default blur",
			debounce: {
				default: 300,
				blur: 0
			}
		};
	}

	searchForLoggedInPlayer() {
		if( this.auth.loggedIn && this.auth.profile.name ) {
			this.searchModel.query = this.auth.profile.name;
			this.search({ searchString: this.searchModel.query });
		}
	}

	reset() {
		this.searchModel.query = "";
		this.search("");
	}
}

PanelFooterSearchController.$inject = ["SteamAuth"];

export default PanelFooterSearchController;