import angular from "angular";
import serverDetailComponent from "./serverDetail.component";
import serverDetailAside from "./serverDetailAside/serverDetailAside";
import serverPlayerTrends from "./serverPlayerTrends/serverPlayerTrends";
import serverTopMaps from "./serverTopMaps/serverTopMaps";
import topMapsTooltipTemplate from "./topMapsTooltip.html!";

let app = angular.module("cgnStats.serverDetail", [
	"cgnStats.serverDetail.serverDetailAside",
	"cgnStats.serverDetail.serverPlayerTrends",
	"cgnStats.serverDetail.serverTopMaps"
]);

app.directive("serverDetail", serverDetailComponent);

app.run(["$templateCache", ($templateCache) => {
	$templateCache.put("app/components/serverDetail/topMapsTooltip.html", topMapsTooltipTemplate);
}]);

export default app;