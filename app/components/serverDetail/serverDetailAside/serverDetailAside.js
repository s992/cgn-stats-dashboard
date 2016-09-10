import angular from "angular";
import serverDetailAsideComponent from "./serverDetailAside.component";

let app = angular.module("cgnStats.serverDetail.serverDetailAside", []);

app.directive("serverDetailAside", serverDetailAsideComponent);

export default app;