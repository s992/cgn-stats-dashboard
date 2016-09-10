let runBlock = ($rootScope, $location, $http, CacheFactory, InfoService, SteamService) => {
	InfoService.loadInfo();

	let steamId = localStorage.getItem("cgn:steamid");

	if( steamId ) {
		SteamService.loadProfile( steamId );
	}

	if( $location.search().motd && ga ) {
		ga("set", "referrer", "http://cgn-server.motd");
		ga("seaN.set", "referrer", "http://cgn-server.motd");
	}

	$rootScope.$on("$routeChangeSuccess", ( event, current, previous ) => {

		if( ga ) {
			let page = $location.path(),
				title = current.$$route.title || "",
				params = { page, title };

			ga('send', 'pageview', params);
			ga('seaN.send', 'pageview', params);
		}

		if( current.$$route.originalPath.indexOf("-embed") !== -1 ) {
			$rootScope.embedded = true;
		} else {
			$rootScope.embedded = false;
		}

		let badResizeRoutes = [
			"/run",
			"/server/:id"
		];

		let badPathParamRoutes = [
			"/run",
			"/players/compare"
		];

		// hack to fix d3 trying to resize graphs when they no longer exist
		if( previous && ( !previous.$$route || badResizeRoutes.indexOf( previous.$$route.originalPath ) !== -1 ) ) {
			$(window).off("resize");
		}

		// clear search params on navigate as long as we're not hitting something that uses search params
		if( current && ( !current.$$route || badPathParamRoutes.indexOf( current.$$route.originalPath ) === -1 ) ) {
			$location.search({});
		}

	});

	$http.defaults.cache = CacheFactory("defaultCache", {
		maxAge: 3 * 60 * 1000, // cache for 3 minute
		cacheFlushInterval: 15 * 60 * 1000, // flush every 15 min
		deleteOnExpire: "aggressive"
	});

	window.defaultCache = CacheFactory.get("defaultCache");
};

runBlock.$inject = ["$rootScope", "$location", "$http", "CacheFactory", "InfoService", "SteamService"];

export default runBlock;