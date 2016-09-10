import angular from "angular";
import mapRecordsComponent from "./mapRecords.component";
import mapRecordsTableComponent from "./mapRecordsTable.component";
import formatTimeFilter from "app/common/filter/formatTime";

let app = angular.module("cgnStats.mapDetail.mapRecords", []);

app.directive("mapRecords", mapRecordsComponent);
app.directive("mapRecordsTable", mapRecordsTableComponent);
app.filter("formatTime", formatTimeFilter);

export default app;