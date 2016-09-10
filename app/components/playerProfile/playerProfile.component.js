import template from "./playerProfile.html!";
import controller from "./playerProfile.controller";

let playerProfileComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default playerProfileComponent