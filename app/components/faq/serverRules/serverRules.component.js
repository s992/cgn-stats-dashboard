import template from "./serverRules.html!";

let serverRulesComponent = () => {
	return {
		template,
		restrict: "AE",
		scope: {}
	};
};

export default serverRulesComponent