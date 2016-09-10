import template from "./steamAuthWidget.html!";
import controller from "./steamAuthWidget.controller";

let steamAuthWidgetComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "authCtrl",
		scope: {},
		bindToController: true
	};
};

export default steamAuthWidgetComponent