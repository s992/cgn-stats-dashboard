import template from "./favoriteMaps.html!";

let favoriteMapsComponent = () => {
	return {
		template,
		restrict: "AE",
		scope: {
			maps: "="
		}
	};
};

export default favoriteMapsComponent