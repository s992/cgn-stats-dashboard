import angular from "angular";
import playerHeaderComponent from "./playerHeader.component";

let app = angular.module("cgnStats.playerProfile.playerHeader", []);

app.directive("playerHeader", playerHeaderComponent);

export default app;