import template from "./mapList.html!";
import controller from "./mapList.controller";

let mapListComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default mapListComponent