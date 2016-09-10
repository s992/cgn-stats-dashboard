import angular from "angular";
import serverListAsideComponent from "./serverListAside.component";

let app = angular.module("cgnStats.serverList.serverListAside", []);

app.directive("serverListAside", serverListAsideComponent);

export default app;