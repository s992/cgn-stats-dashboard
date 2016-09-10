import angular from "angular";
import ErrorModalController from "./errorModal.controller";
import template from "./errorModal.html!";

let app = angular.module("cgnStats.errorModal", []);

app.controller("ErrorModalController", ErrorModalController);

app.run(["$templateCache", ($templateCache) => {
	$templateCache.put("app/components/errorModal/errorModal.html", template);
}]);

export default app;