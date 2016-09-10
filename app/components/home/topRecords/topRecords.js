import angular from "angular";
import topRecordsComponent from "./topRecords.component";
import StatService from "app/common/service/statService";
import pageableTableFooter from "app/components/pageableTableFooter/pageableTableFooter";

let app = angular.module("cgnStats.home.topRecords", [
	"cgnStats.pageableTableFooter"
]);

app.directive("topRecords", topRecordsComponent);
app.factory("StatService", StatService.factory);

export default app;