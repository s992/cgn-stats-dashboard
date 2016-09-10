import angular from "angular";
import HttpErrorModalController from "./httpErrorModal.controller";
import template from "./httpErrorModal.html!";

let app = angular.module("cgnStats.httpErrorModal", []);

app.controller("HttpErrorModalController", HttpErrorModalController);

app.run(["$templateCache", ($templateCache) => {
	$templateCache.put("app/components/httpErrorModal/httpErrorModal.html", template);
}]);

export default app;