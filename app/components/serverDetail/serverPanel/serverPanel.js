import angular from "angular";
import serverPanelComponent from "./serverPanel.component";

let app = angular.module("cgnStats.serverDetail.serverPanel", []);

app.directive("serverPanel", serverPanelComponent);

export default app;