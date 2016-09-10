import angular from "angular";
import playerAsideComponent from "./playerAside.component";
import activityFeedItem from "app/components/activityFeedItem/activityFeedItem";
import relativeTimeFilter from "app/common/filter/relativeTime";

let app = angular.module("cgnStats.playerProfile.playerAside", [
	"cgnStats.activityFeedItem"
]);

app.directive("playerAside", playerAsideComponent);
app.filter("relativeTime", relativeTimeFilter);

export default app;