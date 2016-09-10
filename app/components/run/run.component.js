import template from "./run.html!";
import controller from "./run.controller";

let runComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default runComponent