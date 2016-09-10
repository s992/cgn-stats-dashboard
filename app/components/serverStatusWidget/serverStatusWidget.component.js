import template from "./serverStatusWidget.html!";
import controller from "./serverStatusWidget.controller";

let serverStatusWidgetComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "statusCtrl",
		scope: {
			servers: "="
		},
		bindToController: true
	};
};

export default serverStatusWidgetComponent