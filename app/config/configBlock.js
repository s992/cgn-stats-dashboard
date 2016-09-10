let configBlock = ( $routeProvider, $compileProvider, ngToastProvider ) => {
	$routeProvider
		.when("/", {
			template: "<home></home>",
			reloadOnSearch: false,
			title: "Home"
		})
		.when("/players", {
			template: "<player-list></player-list>",
			reloadOnSearch: false,
			title: "Player List"
		})
		.when("/players/compare", {
			template: "<player-comparison></player-comparison>",
			reloadOnSearch: false,
			title: "Player Comparison"
		})
		.when("/player/:id", {
			template: "<player-profile></player-profile>",
			reloadOnSearch: false,
			title: "Player Profile"
		})
		.when("/maps", {
			template: "<map-list></map-list>",
			reloadOnSearch: false,
			title: "Map List"
		})
		.when("/map/:id", {
			template: "<map-detail></map-detail>",
			reloadOnSearch: false,
			title: "Map Detail"
		})
		.when("/run", {
			template: "<run></run>",
			reloadOnSearch: false,
			title: "Run Viewer"
		})
		.when("/servers", {
			template: "<server-list></server-list>",
			reloadOnSearch: false,
			title: "Server List"
		})
		.when("/server/:id", {
			template: "<server-detail></server-detail>",
			reloadOnSearch: false,
			title: "Server Detail"
		})
		.when("/servers-embed", {
			template: "<server-list-embed></server-list-embed>",
			reloadOnSearch: false,
			title: "Server List"
		})
		.when("/faq/commands", {
			template: "<server-commands></server-commands>",
			reloadOnSearch: false,
			title: "Server Commands"
		})
		.when("/faq/commands-embed", {
			template: "<server-commands></server-commands>",
			reloadOnSearch: false,
			title: "Server Commands"
		})
		.when("/faq/rules", {
			template: "<server-rules></server-rules>",
			reloadOnSearch: false,
			title: "Server Rules"
		})
		.when("/faq/rules-embed", {
			template: "<server-rules></server-rules>",
			reloadOnSearch: false,
			title: "Server Rules"
		})
		.otherwise("/");

	// allow steam connect urls
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|steam):/);

	ngToastProvider.configure({
		animation: "fade",
		combineDuplications: true
	});
}

configBlock.$inject = ["$routeProvider", "$compileProvider", "ngToastProvider"];

export default configBlock;