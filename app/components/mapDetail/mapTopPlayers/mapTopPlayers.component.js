import template from "./mapTopPlayers.html!";
import controller from "./mapTopPlayers.controller";

let mapTopPlayersComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "topCtrl",
		scope: {
			players: "="
		},
		bindToController: true
	};
};

export default mapTopPlayersComponent