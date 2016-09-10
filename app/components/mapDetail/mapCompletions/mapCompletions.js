import angular from "angular";
import mapCompletionsComponent from "./mapCompletions.component";
import formatTimeFilter from "app/common/filter/formatTime";
import panelFooterSearch from "app/components/panelFooterSearch/panelFooterSearch";

let app = angular.module("cgnStats.mapDetail.mapCompletions", [
	"cgnStats.activityFeedItem",
	"cgnStats.panelFooterSearch"
]);

app.directive("mapCompletions", mapCompletionsComponent);
app.filter("formatTime", formatTimeFilter);

export default app;