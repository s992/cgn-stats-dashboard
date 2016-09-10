import template from "./mapRecordsTable.html!";

let mapRecordsTableComponent = () => {
	return {
		template,
		restrict: "AE",
		scope: {
			records: "=",
			tableHeading: "@",
			columnHeading: "@"
		}
	};
};

export default mapRecordsTableComponent