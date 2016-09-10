import template from "./serverDetail.html!";
import controller from "./serverDetail.controller";

let serverDetailComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default serverDetailComponent