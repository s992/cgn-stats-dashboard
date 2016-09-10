import angular from "angular";
import serverListEmbedComponent from "./serverListEmbed.component";
import serverPanel from "app/components/serverDetail/serverPanel/serverPanel";

let app = angular.module("cgnStats.serverListEmbed", [
	"cgnStats.serverDetail.serverPanel"
]);

app.directive("serverListEmbed", serverListEmbedComponent);

export default app;