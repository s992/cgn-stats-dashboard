import template from "./serverListEmbed.html!";
import controller from "./serverListEmbed.controller";

let serverListEmbedComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "ctrl",
		scope: {},
		bindToController: true
	};
};

export default serverListEmbedComponent