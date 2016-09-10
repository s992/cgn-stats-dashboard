import angular from "angular";
import headerComponent from "./header.component";
import headerSearch from "./search/search";

let app = angular.module("cgnStats.header", [
	"cgnStats.header.search"
]);

app.directive("header", headerComponent);

export default app;