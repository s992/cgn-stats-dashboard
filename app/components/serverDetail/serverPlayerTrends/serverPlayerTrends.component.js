import template from "./serverPlayerTrends.html!";

let serverPlayerTrendsComponent = () => {
	return {
		template,
		restrict: "AE",
		controllerAs: "",
		scope: {
			players: "="
		},
		link: function( scope ) {
			let playerTrends = window.d3.playerTrends(),
				container = window.d3.select(".player-trends .chart");

			// any time our runs array updates, update the chart
			scope.$watchCollection("players", players => {
				if( players && players.length ) {
					container.datum( players ).call( playerTrends );
				}
			});

			// resize our chart when the window resizes
			$(window).on("resize", function() {
				container.call( playerTrends );
			});
		}
	};
};

export default serverPlayerTrendsComponent;