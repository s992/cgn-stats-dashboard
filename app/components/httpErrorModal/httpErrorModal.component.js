import template from "./httpErrorModal.html!";
import controller from "./httpErrorModal.controller";

let httpErrorModalComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default httpErrorModalComponent