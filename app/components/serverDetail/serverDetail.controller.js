class ServerDetailController {
	constructor( $routeParams, ServerService ) {
		this.routeParams = $routeParams;
		this.serverService = ServerService;
		this.id = this.routeParams.id;
		this.init();
	}
	init() {
		this.serverService.getServerDetails( this.id ).then(result => {
			this.server = result;
		});
	}
}

ServerDetailController.$inject = ["$routeParams", "ServerService"];

export default ServerDetailController;