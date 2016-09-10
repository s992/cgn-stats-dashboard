import template from "./mapRecords.html!";
import controller from "./mapRecords.controller";

let mapRecordsComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "recordCtrl",
		scope: {
			checkpoints: "=",
			bonuses: "="
		},
		bindToController: true
	};
};

export default mapRecordsComponent