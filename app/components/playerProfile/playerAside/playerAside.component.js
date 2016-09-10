import template from "./playerAside.html!";
import controller from "./playerAside.controller";

let playerAsideComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "asideCtrl",
		scope: {
			profile: "="
		},
		bindToController: true
	};
};

export default playerAsideComponent