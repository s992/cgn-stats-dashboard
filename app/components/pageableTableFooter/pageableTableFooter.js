import angular from "angular";
import pageableTableFooterComponent from "./pageableTableFooter.component";

let app = angular.module("cgnStats.pageableTableFooter", []);

app.directive("pageableTableFooter", pageableTableFooterComponent);

export default app;