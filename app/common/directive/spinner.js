let spinner = () => {
	return {
		restrict: "A",
		scope: {
			mini: "="
		},
		template:
			`<div class="spinner" ng-class="{ 'mini-spinner': mini }">
				<div class="rect1"></div>
				<div class="rect2"></div>
				<div class="rect3"></div>
				<div ng-if="!mini" class="rect4"></div>
				<div ng-if="!mini" class="rect5"></div>
			</div>`
	};
};

export default spinner