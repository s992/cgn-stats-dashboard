import angular from "angular";
import mapDetailComponent from "./mapDetail.component";
import mapHeader from "./mapHeader/mapHeader";
import mapAside from "./mapAside/mapAside";
import mapCompletions from "./mapCompletions/mapCompletions";
import mapTopPlayers from "./mapTopPlayers/mapTopPlayers";
import mapRecords from "./mapRecords/mapRecords";
import mapPoints from "./mapPoints/mapPoints";
import MapService from "app/common/service/mapService";
import MapFactory from "app/common/model/map";

let app = angular.module("cgnStats.mapDetail", [
	"cgnStats.mapDetail.mapHeader",
	"cgnStats.mapDetail.mapAside",
	"cgnStats.mapDetail.mapCompletions",
	"cgnStats.mapDetail.mapTopPlayers",
	"cgnStats.mapDetail.mapRecords",
	"cgnStats.mapDetail.mapPoints",
]);

app.directive("mapDetail", mapDetailComponent);
app.factory("MapService", MapService.factory);
app.factory("Map", MapFactory.factory);

export default app;