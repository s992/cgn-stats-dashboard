import template from "./playerMaps.html!";
import controller from "./playerMaps.controller";

let playerMapsComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "mapCtrl",
		scope: {
			maps: "=",
			incompleteMaps: "=",
			mapCount: "=",
			playerId: "="
		},
		bindToController: true
	};
};

export default playerMapsComponent