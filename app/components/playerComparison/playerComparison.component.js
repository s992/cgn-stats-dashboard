import template from "./playerComparison.html!";
import controller from "./playerComparison.controller";

let playerComparisonComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default playerComparisonComponent