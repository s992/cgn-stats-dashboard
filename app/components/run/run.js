import angular from "angular";
import runComponent from "./run.component";
import mapHeader from "app/components/mapDetail/mapHeader/mapHeader";
import mapAside from "app/components/mapDetail/mapAside/mapAside";
import runViewer from "./runViewer/runViewer"
import {qtip} from "app/lib/jquery.qtip";
import {d3RunViewer} from "app/lib/d3.runviewer";
import template from "./typeahead.html!";

let app = angular.module("cgnStats.run", [
	"cgnStats.mapDetail.mapHeader",
	"cgnStats.mapDetail.mapAside",
	"cgnStats.run.runViewer"
]);

app.directive("run", runComponent);

app.run(["$templateCache", ($templateCache) => {
	$templateCache.put("app/components/run/typeahead.html", template);
}]);

export default app;