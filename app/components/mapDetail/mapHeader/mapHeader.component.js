import template from "./mapHeader.html!";
import controller from "./mapHeader.controller";

let mapHeaderComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "headerCtrl",
		scope: {
			map: "=",
			skipDetails: "@"
		},
		bindToController: true
	};
};

export default mapHeaderComponent