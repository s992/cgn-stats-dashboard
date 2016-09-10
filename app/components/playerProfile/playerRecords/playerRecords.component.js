import template from "./playerRecords.html!";
import controller from "./playerRecords.controller";

let playerRecordsComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "recordCtrl",
		scope: {
			records: "=",
			headerTitle: "@",
			checkpointColumn: "@",
			recordCount: "="
		},
		bindToController: true
	};
};

export default playerRecordsComponent