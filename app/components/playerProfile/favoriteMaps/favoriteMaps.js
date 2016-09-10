import angular from "angular";
import favoriteMapsComponent from "./favoriteMaps.component";

let app = angular.module("cgnStats.playerProfile.favoriteMaps", []);

app.directive("favoriteMaps", favoriteMapsComponent);

export default app;