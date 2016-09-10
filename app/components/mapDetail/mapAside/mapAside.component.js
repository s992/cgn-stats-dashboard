import template from "./mapAside.html!";
import controller from "./mapAside.controller";

let mapAsideComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "asideCtrl",
		scope: {
			map: "="
		},
		bindToController: true
	};
};

export default mapAsideComponent