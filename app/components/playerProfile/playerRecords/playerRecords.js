import angular from "angular";
import playerRecordsComponent from "./playerRecords.component";
import formatTimeFilter from "app/common/filter/formatTime";

let app = angular.module("cgnStats.playerProfile.playerRecords", []);

app.directive("playerRecords", playerRecordsComponent);
app.filter("formatTime", formatTimeFilter);

export default app;