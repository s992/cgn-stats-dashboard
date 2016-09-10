import angular from "angular";

let app = angular.module("cgnStats.config.constants", []);

app.constant("apiUrl", window.apiUrl);

export default app;