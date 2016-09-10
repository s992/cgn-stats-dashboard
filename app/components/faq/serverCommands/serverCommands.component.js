import template from "./serverCommands.html!";

let serverCommandsComponent = () => {
	return {
		template,
		restrict: "AE",
		scope: {}
	};
};

export default serverCommandsComponent