import angular from "angular";
import <%= name %>Component from "./<%= name %>.component";

let app = angular.module("cgnStats.<%= name %>", []);

app.directive("<%= name %>", <%= name %>Component);

export default app;