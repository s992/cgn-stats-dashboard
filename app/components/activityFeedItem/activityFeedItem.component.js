import template from "./activityFeedItem.html!";
import controller from "./activityFeedItem.controller";

let activityFeedItemComponent = () => {
	return {
		template,
		controller,
		restrict: "AE",
		controllerAs: "activityItemCtrl",
		scope: {
			activity: "=activityFeedItem"
		},
		bindToController: true
	};
};

export default activityFeedItemComponent