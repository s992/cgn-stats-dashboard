class ServerDetailAsideController {
	constructor( ServerService ) {
		this.serverService = ServerService;
		this.init();
	}

	init() {
		this.loadServerStatus();
	}

	loadServerStatus() {
		this.serverService.getServerStatus().then(result => {
			this.servers = result;
		});
	}
}

ServerDetailAsideController.$inject = ["ServerService"];

export default ServerDetailAsideController;