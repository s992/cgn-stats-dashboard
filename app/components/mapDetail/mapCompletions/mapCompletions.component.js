import template from "./mapCompletions.html!";
import controller from "./mapCompletions.controller";

let mapCompletionsComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "compCtrl",
		scope: {
			completions: "=",
			mapId: "="
		},
		bindToController: true
	};
};

export default mapCompletionsComponent