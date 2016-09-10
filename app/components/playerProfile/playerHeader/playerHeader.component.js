import template from "./playerHeader.html!";
import controller from "./playerHeader.controller";

let playerHeaderComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "headerCtrl",
		scope: {
			player: "="
		},
		bindToController: true
	};
};

export default playerHeaderComponent