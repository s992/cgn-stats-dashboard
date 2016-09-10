import angular from "angular";
import serverStatusWidgetComponent from "./serverStatusWidget.component";

let app = angular.module("cgnStats.serverStatusWidget", []);

app.directive("serverStatusWidget", serverStatusWidgetComponent);

export default app;