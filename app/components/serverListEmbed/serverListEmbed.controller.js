class ServerListEmbedController {
	constructor( ServerService ) {
		this.serverService = ServerService;
		this.init();
	}
	init() {
		this.serverService.getServerStatusLite().then(result => {
			this.servers = result;
		});
	}
}

ServerListEmbedController.$inject = ["ServerService"];

export default ServerListEmbedController;