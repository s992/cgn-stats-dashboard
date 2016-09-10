import angular from "angular";
import mapListComponent from "./mapList.component";
import sortableTableHeader from "app/common/directive/sortableTableHeader";

let app = angular.module("cgnStats.mapList", []);

app.directive("mapList", mapListComponent);
app.directive("sortableTableHeader", sortableTableHeader);

export default app;