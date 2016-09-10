import template from "./faqAside.html!";
import controller from "./faqAside.controller";

let faqAsideComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "asideCtrl",
		scope: {},
		bindToController: true
	};
};

export default faqAsideComponent