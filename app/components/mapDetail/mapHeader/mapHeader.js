import angular from "angular";
import mapHeaderComponent from "./mapHeader.component";

let app = angular.module("cgnStats.mapDetail.mapHeader", []);

app.directive("mapHeader", mapHeaderComponent);

export default app;