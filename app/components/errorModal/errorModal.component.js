import template from "./errorModal.html!";
import controller from "./errorModal.controller";

let errorModalComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default errorModalComponent