import template from "./serverDetailAside.html!";
import controller from "./serverDetailAside.controller";

let serverDetailAsideComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "asideCtrl",
		scope: {},
		bindToController: true
	};
};

export default serverDetailAsideComponent