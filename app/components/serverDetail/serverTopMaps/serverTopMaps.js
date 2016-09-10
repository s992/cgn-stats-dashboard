import angular from "angular";
import serverTopMapsComponent from "./serverTopMaps.component";
import {qtip} from "app/lib/jquery.qtip";
import {d3TopMaps} from "app/lib/d3.servertopmaps";

let app = angular.module("cgnStats.serverDetail.serverTopMaps", []);

app.directive("serverTopMaps", serverTopMapsComponent);

export default app;