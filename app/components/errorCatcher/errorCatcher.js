import angular from "angular";
import ExceptionHandler from "./exceptionHandler";
import HttpErrorInterceptor from "./httpErrorInterceptor";

let app = angular.module("cgnStats.errorCatcher", [
	"cgnStats.errorModal",
	"cgnStats.httpErrorModal"
]);

app.factory("$exceptionHandler", ExceptionHandler);
app.factory("HttpErrorInterceptor", HttpErrorInterceptor);

app.config(["$httpProvider", $httpProvider => {
	$httpProvider.interceptors.push("HttpErrorInterceptor");
}]);

// hack to make sure we dont open multiple modals at once
window.errorModalVisible = false;

export default app;