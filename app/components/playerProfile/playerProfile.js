import angular from "angular";
import playerProfileComponent from "./playerProfile.component";
import playerAside from "./playerAside/playerAside";
import playerHeader from "./playerHeader/playerHeader";
import playerMaps from "./playerMaps/playerMaps";
import playerCheckpoints from "./playerCheckpoints/playerCheckpoints";
import playerRecords from "./playerRecords/playerRecords";
import favoriteMaps from "./favoriteMaps/favoriteMaps";
import PlayerFactory from "app/common/model/playerProfile";
import SteamService from "app/common/service/steamService";

let app = angular.module("cgnStats.playerProfile", [
	"cgnStats.playerProfile.playerAside",
	"cgnStats.playerProfile.playerHeader",
	"cgnStats.playerProfile.playerMaps",
	"cgnStats.playerProfile.playerCheckpoints",
	"cgnStats.playerProfile.playerRecords",
	"cgnStats.playerProfile.favoriteMaps",
]);

app.directive("playerProfile", playerProfileComponent);
app.factory("Player", PlayerFactory.factory);
app.factory("SteamService", SteamService.factory);

export default app;