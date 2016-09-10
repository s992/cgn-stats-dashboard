import template from "./topMaps.html!";
import controller from "./topMaps.controller";

let topMapsComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "mapsCtrl",
		scope: {},
		bindToController: true
	};
};

export default topMapsComponent