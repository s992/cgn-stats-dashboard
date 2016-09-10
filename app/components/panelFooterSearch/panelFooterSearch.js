import angular from "angular";
import panelFooterSearchComponent from "./panelFooterSearch.component";

let app = angular.module("cgnStats.panelFooterSearch", []);

app.directive("panelFooterSearch", panelFooterSearchComponent);

export default app;