import angular from "angular";
import faqAsideComponent from "./faqAside.component";

let app = angular.module("cgnStats.faq.faqAside", []);

app.directive("faqAside", faqAsideComponent);

export default app;