class ServerStatusWidgetController {
	constructor( $scope, $location, ServerService ) {
		this.scope = $scope;
		this.location = $location;
		this.serverService = ServerService;
		this.init();
	}

	init() {

	}

	isActive( path ) {
		return path === this.location.path();
	}

	refreshServers() {
		this.servers = [];

		this.serverService.getServerStatus( true ).then(result => {
			this.servers = result;
		});
	}
}

ServerStatusWidgetController.$inject = ["$scope", "$location", "ServerService"];

export default ServerStatusWidgetController;