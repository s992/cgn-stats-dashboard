import angular from "angular";
import serverRulesComponent from "./serverRules.component";
import faqAside from "app/components/faq/faqAside/faqAside";

let app = angular.module("cgnStats.faq.serverRules", [
	"cgnStats.faq.faqAside"
]);

app.directive("serverRules", serverRulesComponent);

export default app;