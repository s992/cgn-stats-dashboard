import angular from "angular";
import homeAsideComponent from "./homeAside.component";
import ServerService from "app/common/service/serverService";
import PlayerService from "app/common/service/playerService";
import activityFeedItem from "app/components/activityFeedItem/activityFeedItem";
import serverStatusWidget from "app/components/serverStatusWidget/serverStatusWidget";
import relativeTimeFilter from "app/common/filter/relativeTime";

let app = angular.module("cgnStats.home.homeAside", [
	"cgnStats.activityFeedItem",
	"cgnStats.serverStatusWidget"
]);

app.directive("homeAside", homeAsideComponent);
app.factory("ServerService", ServerService.factory);
app.factory("PlayerService", PlayerService.factory);
app.filter("relativeTime", relativeTimeFilter);

export default app;