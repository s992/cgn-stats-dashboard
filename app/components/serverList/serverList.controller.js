class ServerListController {
	constructor( ServerService ) {
		this.serverService = ServerService;
		this.init();
	}
	init() {
		this.serverService.getServerStatus().then(result => {
			this.servers = result;
		});
	}
}

ServerListController.$inject = ["ServerService"];

export default ServerListController;