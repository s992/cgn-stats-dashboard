import template from "./playerList.html!";
import controller from "./playerList.controller";

let playerListComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default playerListComponent