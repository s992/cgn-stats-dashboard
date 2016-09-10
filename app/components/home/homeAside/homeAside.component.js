import template from "./homeAside.html!";
import controller from "./homeAside.controller";

let homeAsideComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "asideCtrl",
		scope: {},
		bindToController: true
	};
};

export default homeAsideComponent