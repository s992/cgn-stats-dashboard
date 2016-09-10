// standard libs
import jquery from "jquery";
import angular from "angular";
import d3 from "d3";
import moment from "moment";
import {ngRoute} from "angular-route";
import {ngBootstrap} from "angular-bootstrap";
import {ngCache} from "angular-cache";
import {ngSanitize} from "angular-sanitize";
import {ngAnimate} from "angular-animate";
import {momentDurationFormat} from "moment-duration-format";
import {ngToast} from "tameraydin/ngToast";

// cgn modules
import config from "./config/config.module";
import errorCatcher from "./components/errorCatcher/errorCatcher";
import errorModal from "./components/errorModal/errorModal";
import httpErrorModal from "./components/httpErrorModal/httpErrorModal";
import header from "./components/header/header";
import home from "./components/home/home";
import playerProfile from "./components/playerProfile/playerProfile";
import mapDetail from "./components/mapDetail/mapDetail";
import run from "./components/run/run";
import serverList from "./components/serverList/serverList";
import serverDetail from "./components/serverDetail/serverDetail";
import playerList from "./components/playerList/playerList";
import mapList from "./components/mapList/mapList";
import playerComparison from "./components/playerComparison/playerComparison";
import serverListEmbed from "./components/serverListEmbed/serverListEmbed";
import serverCommands from "./components/faq/serverCommands/serverCommands";
import serverRules from "./components/faq/serverRules/serverRules";
import steamAuthWidget from "./components/steamAuthWidget/steamAuthWidget";

// global directive
import spinner from "app/common/directive/spinner";

// global service
import SteamAuth from "app/common/model/steamAuth";

let app = angular.module("cgnStats", [
	"ngRoute",
	"angular-cache",
	"ui.bootstrap",
	"ngSanitize",
	"ngAnimate",
	"ngToast",
	"cgnStats.config",
	"cgnStats.errorCatcher",
	"cgnStats.errorModal",
	"cgnStats.httpErrorModal",
	"cgnStats.header",
	"cgnStats.home",
	"cgnStats.playerProfile",
	"cgnStats.mapDetail",
	"cgnStats.run",
	"cgnStats.serverList",
	"cgnStats.serverDetail",
	"cgnStats.playerList",
	"cgnStats.mapList",
	"cgnStats.playerComparison",
	"cgnStats.serverListEmbed",
	"cgnStats.faq.serverCommands",
	"cgnStats.faq.serverRules",
	"cgnStats.steamAuthWidget"
]);

app.directive("spinner", spinner);
app.service("SteamAuth", SteamAuth);

// shh..
window.moment = moment;
window.d3 = d3;