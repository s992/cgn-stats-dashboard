import angular from "angular";
import serverListComponent from "./serverList.component";
import serverListAside from "./serverListAside/serverListAside";
import serverPanel from "app/components/serverDetail/serverPanel/serverPanel";

let app = angular.module("cgnStats.serverList", [
	"cgnStats.serverList.serverListAside",
	"cgnStats.serverDetail.serverPanel"
]);

app.directive("serverList", serverListComponent);

export default app;