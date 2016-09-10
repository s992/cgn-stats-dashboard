import template from "./serverPanel.html!";

let serverPanelComponent = () => {
	return {
		template,
		controller: () => {},
		restrict: "AE",
		controllerAs: "panelCtrl",
		scope: {
			server: "=",
			showDetailLink: "@"
		},
		bindToController: true
	};
};

export default serverPanelComponent