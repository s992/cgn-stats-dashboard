import angular from "angular";
import searchComponent from "./search.component";
import SearchService from "app/common/service/searchService";
import template from "./typeahead.html!";

let app = angular.module("cgnStats.header.search", []);

app.factory("SearchService", SearchService.factory);
app.directive("headerSearch", searchComponent);

app.run(["$templateCache", ($templateCache) => {
	$templateCache.put("app/components/header/search/typeahead.html", template);
}]);

export default app;