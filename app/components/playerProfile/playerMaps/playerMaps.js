import angular from "angular";
import playerMapsComponent from "./playerMaps.component";
import HelperService from "app/common/service/helperService";
import formatTimeFilter from "app/common/filter/formatTime";
import panelFooterSearch from "app/components/panelFooterSearch/panelFooterSearch";

let app = angular.module("cgnStats.playerProfile.playerMaps", [
	"cgnStats.activityFeedItem",
	"cgnStats.panelFooterSearch"
]);

app.directive("playerMaps", playerMapsComponent);
app.factory("HelperService", HelperService.factory);
app.filter("formatTime", formatTimeFilter);

export default app;