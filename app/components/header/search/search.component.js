import template from "./search.html!";
import controller from "./search.controller";

let searchComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "searchCtrl",
		scope: {},
		bindToController: true
	};
};

export default searchComponent