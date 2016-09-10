import angular from "angular";
import topMapsComponent from "./topMaps.component";
import StatService from "app/common/service/statService";
import pageableTableFooter from "app/components/pageableTableFooter/pageableTableFooter";

let app = angular.module("cgnStats.home.topMaps", [
	"cgnStats.pageableTableFooter"
]);

app.directive("topMaps", topMapsComponent);
app.factory("StatService", StatService.factory);

export default app;