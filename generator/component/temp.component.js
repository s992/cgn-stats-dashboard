import template from "./<%= name %>.html!";
import controller from "./<%= name %>.controller";

let <%= name %>Component = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "<%= ctrlAs %>",
		scope: {},
		bindToController: true
	};
};

export default <%= name %>Component