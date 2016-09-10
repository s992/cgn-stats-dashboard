import template from "./pageableTableFooter.html!";

let pageableTableFooterComponent = () => {
	return {
		template,
		restrict: "AE",
		scope: {
			records: "=recordSet",
			parentColumns: "@"
		},
		replace: true
	};
};

export default pageableTableFooterComponent