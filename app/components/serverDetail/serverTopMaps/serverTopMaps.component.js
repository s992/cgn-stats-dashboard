import template from "./serverTopMaps.html!";

let serverTopMapsComponent = () => {
	return {
		template,
		restrict: "AE",
		scope: {
			maps: "="
		},
		link: function( scope ) {
			let topMaps = window.d3.topMaps(),
				container = window.d3.select(".server-top-maps .chart");

			// any time our runs array updates, update the chart
			scope.$watchCollection("maps", maps => {
				if( maps && maps.length ) {
					container.datum( maps ).call( topMaps );
				}
			});

			// resize our chart when the window resizes
			$(window).on("resize", function() {
				container.call( topMaps );
			});
		}
	};
};

export default serverTopMapsComponent;