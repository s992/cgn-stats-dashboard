import template from "./header.html!";
import controller from "./header.controller";

let headerComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "headerCtrl",
		scope: {},
		bindToController: true
	};
};

export default headerComponent