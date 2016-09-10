import template from "./runViewer.html!";

let runViewerComponent = () => {
	return {
		template,
		restrict: "AE",
		controllerAs: "viewerCtrl",
		scope: {
			runs: "="
		},
		link: function( scope ) {
			let runViewer = window.d3.runViewer(),
				container = window.d3.select(".chart");

			// any time our runs array updates, update the chart
			scope.$watchCollection("runs", runs => {
				if( runs && runs.length ) {
					container.datum( runs ).call( runViewer );
				}
			});

			// resize our chart when the window resizes
			$(window).on("resize", function() {
				container.call( runViewer );
			});
		}
	};
};

export default runViewerComponent