import angular from "angular";
import playerListComponent from "./playerList.component";

let app = angular.module("cgnStats.playerList", []);

app.directive("playerList", playerListComponent);

export default app;