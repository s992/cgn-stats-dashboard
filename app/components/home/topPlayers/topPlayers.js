import angular from "angular";
import topPlayersComponent from "./topPlayers.component";
import StatService from "app/common/service/statService";
import pageableTableFooter from "app/components/pageableTableFooter/pageableTableFooter";

let app = angular.module("cgnStats.home.topPlayers", [
	"cgnStats.pageableTableFooter"
]);

app.directive("topPlayers", topPlayersComponent);
app.factory("StatService", StatService.factory);

export default app;