class PlayerProfileController {
	constructor( $routeParams, Player ) {
		this.routeParams = $routeParams;
		this.id = this.routeParams.id;
		this.player = Player.forId( this.id );
		this.init();
	}
	init() {
		this.player.loadProfile();
		this.player.loadActivity();
		this.player.loadFavoriteMaps();
	}
}

PlayerProfileController.$inject = ["$routeParams", "Player"];

export default PlayerProfileController;