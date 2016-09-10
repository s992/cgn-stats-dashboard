import angular from "angular";
import serverCommandsComponent from "./serverCommands.component";
import faqAside from "app/components/faq/faqAside/faqAside";

let app = angular.module("cgnStats.faq.serverCommands", [
	"cgnStats.faq.faqAside"
]);

app.directive("serverCommands", serverCommandsComponent);

export default app;