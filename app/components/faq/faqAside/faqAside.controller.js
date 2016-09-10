class FaqAsideController {
	constructor( $location ) {
		this.location = $location;
	}

	isActive( path ) {
		return path === this.location.path();
	}
}

FaqAsideController.$inject = ["$location"];

export default FaqAsideController;