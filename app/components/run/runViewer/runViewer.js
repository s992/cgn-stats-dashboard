import angular from "angular";
import runViewerComponent from "./runViewer.component";

let app = angular.module("cgnStats.run.runViewer", []);

app.directive("runViewer", runViewerComponent);

export default app;