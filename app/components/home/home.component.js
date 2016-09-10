import template from "./home.html!";

let homeComponent = () => {
	return {
		template,
		restrict: "AE",
		scope: {}
	};
};

export default homeComponent