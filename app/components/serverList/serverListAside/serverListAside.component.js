import template from "./serverListAside.html!";

let serverListAsideComponent = () => {
	return {
		template,
		controller: () => {},
		restrict: "AE",
		controllerAs: "asideCtrl",
		scope: {
			servers: "="
		},
		bindToController: true
	};
};

export default serverListAsideComponent