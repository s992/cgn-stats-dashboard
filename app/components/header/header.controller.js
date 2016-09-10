class HeaderController {
	constructor( $location ) {
		this.location = $location;
	}

	isActive( path, checkSubPages ) {
		if( !checkSubPages ) {
			return path === this.location.path();
		}

		return this.location.path().indexOf( path ) !== -1;
	}
}

HeaderController.$inject = ["$location"];

export default HeaderController;