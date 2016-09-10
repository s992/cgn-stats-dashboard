import template from "./playerCheckpoints.html!";
import controller from "./playerCheckpoints.controller";

let playerCheckpointsComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "cpCtrl",
		scope: {
			checkpoints: "=",
			incompleteCheckpoints: "=",
			headerTitle: "@",
			type: "@",
			key: "@",
			barClass: "@",
			checkpointCount: "="
		},
		bindToController: true
	};
};

export default playerCheckpointsComponent