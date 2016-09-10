import angular from "angular";
import activityFeedItemComponent from "./activityFeedItem.component";

let app = angular.module("cgnStats.activityFeedItem", []);

app.directive("activityFeedItem", activityFeedItemComponent);

export default app;