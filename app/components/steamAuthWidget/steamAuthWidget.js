import angular from "angular";
import steamAuthWidgetComponent from "./steamAuthWidget.component";

let app = angular.module("cgnStats.steamAuthWidget", []);

app.directive("steamAuthWidget", steamAuthWidgetComponent);

export default app;