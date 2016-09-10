import angular from "angular";
import serverPlayerTrendsComponent from "./serverPlayerTrends.component";
import {qtip} from "app/lib/jquery.qtip";
import {d3PlayerTrends} from "app/lib/d3.playertrends";

let app = angular.module("cgnStats.serverDetail.serverPlayerTrends", []);

app.directive("serverPlayerTrends", serverPlayerTrendsComponent);

export default app;