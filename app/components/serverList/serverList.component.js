import template from "./serverList.html!";
import controller from "./serverList.controller";

let serverListComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default serverListComponent