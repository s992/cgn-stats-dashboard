import angular from "angular";
import mapTopPlayersComponent from "./mapTopPlayers.component";
import formatTimePlayedFilter from "app/common/filter/formatTimePlayed";

let app = angular.module("cgnStats.mapDetail.mapTopPlayers", []);

app.directive("mapTopPlayers", mapTopPlayersComponent);
app.filter("formatTimePlayed", formatTimePlayedFilter);

export default app;