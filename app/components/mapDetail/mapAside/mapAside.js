import angular from "angular";
import mapAsideComponent from "./mapAside.component";
import activityFeedItem from "app/components/activityFeedItem/activityFeedItem";
import truncator from "app/common/directive/truncateWithTooltip";
import relativeTimeFilter from "app/common/filter/relativeTime";
import truncateFilter from "app/common/filter/truncate";

let app = angular.module("cgnStats.mapDetail.mapAside", [
	"cgnStats.activityFeedItem"
]);

app.directive("mapAside", mapAsideComponent);
app.directive("truncator", truncator);
app.filter("relativeTime", relativeTimeFilter);
app.filter("truncate", truncateFilter);

export default app;