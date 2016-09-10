import template from "./topPlayers.html!";
import controller from "./topPlayers.controller";

let topPlayersComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "playerCtrl",
		scope: {},
		bindToController: true
	};
};

export default topPlayersComponent