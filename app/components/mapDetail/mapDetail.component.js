import template from "./mapDetail.html!";
import controller from "./mapDetail.controller";

let mapDetailComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default mapDetailComponent