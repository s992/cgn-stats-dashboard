import template from "./mapPoints.html!";
import controller from "./mapPoints.controller";

let mapPointsComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "pointCtrl",
		scope: {
			map: "="
		},
		bindToController: true
	};
};

export default mapPointsComponent