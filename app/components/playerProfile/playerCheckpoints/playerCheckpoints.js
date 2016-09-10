import angular from "angular";
import playerCheckpointsComponent from "./playerCheckpoints.component";
import HelperService from "app/common/service/helperService";
import formatTimeFilter from "app/common/filter/formatTime";
import panelFooterSearch from "app/components/panelFooterSearch/panelFooterSearch";

let app = angular.module("cgnStats.playerProfile.playerCheckpoints", [
	"cgnStats.activityFeedItem",
	"cgnStats.panelFooterSearch"
]);

app.directive("playerCheckpoints", playerCheckpointsComponent);
app.factory("HelperService", HelperService.factory);
app.filter("formatTime", formatTimeFilter);

export default app;