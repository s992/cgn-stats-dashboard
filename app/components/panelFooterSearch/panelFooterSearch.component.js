import template from "./panelFooterSearch.html!";
import controller from "./panelFooterSearch.controller";

let panelFooterSearchComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "footerSearchCtrl",
		scope: {
			search: "&",
			searchPlaceholder: "@",
			enableFindMe: "@",
			findMeText: "@"
		},
		bindToController: true
	};
};

export default panelFooterSearchComponent