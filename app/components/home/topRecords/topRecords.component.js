import template from "./topRecords.html!";
import controller from "./topRecords.controller";

let topRecordsComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "recordsCtrl",
		scope: {
			title: "@recordTitle",
			shortTitle: "@",
			type: "@recordType"
		},
		bindToController: true
	};
};

export default topRecordsComponent