import angular from "angular";
import homeComponent from "./home.component";
import homeAside from "./homeAside/homeAside";
import topPlayers from "./topPlayers/topPlayers";
import topMaps from "./topMaps/topMaps";
import topRecords from "./topRecords/topRecords";

let app = angular.module("cgnStats.home", [
	"cgnStats.home.homeAside",
	"cgnStats.home.topPlayers",
	"cgnStats.home.topMaps",
	"cgnStats.home.topRecords",
]);

app.directive("home", homeComponent);

export default app;