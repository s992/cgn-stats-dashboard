import angular from "angular";
import mapPointsComponent from "./mapPoints.component";

let app = angular.module("cgnStats.mapDetail.mapPoints", []);

app.directive("mapPoints", mapPointsComponent);

export default app;