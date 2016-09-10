import angular from "angular";
import playerComparisonComponent from "./playerComparison.component";
import SearchService from "app/common/service/searchService";
import template from "./typeahead.html!";

let app = angular.module("cgnStats.playerComparison", []);

app.directive("playerComparison", playerComparisonComponent);
app.factory("SearchService", SearchService.factory);

app.run(["$templateCache", ($templateCache) => {
	$templateCache.put("app/components/playerComparison/typeahead.html", template);
}]);

export default app;