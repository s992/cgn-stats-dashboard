import angular from "angular";
import constants from "./constants.module";
import configBlock from "./configBlock";
import runBlock from "./runBlock";
import SteamAuthInterceptor from "./steamAuthInterceptor";
import InfoService from "app/common/service/infoService";
import Info from "app/common/model/info";

let app = angular.module("cgnStats.config", [
	"cgnStats.config.constants"
]);

app.config(configBlock);
app.run(runBlock);

app.config(["$httpProvider", $httpProvider => {
	$httpProvider.interceptors.push(SteamAuthInterceptor);
}]);

app.factory("InfoService", InfoService.factory);
app.service("Info", Info);

export default app