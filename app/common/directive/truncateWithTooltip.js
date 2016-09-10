let truncator = () => {
	return {
		restrict: "A",
		scope: {
			truncatee: "=",
			maxLength: "@",
			useTooltip: "@"
		},
		template:
			`<span tooltip="{{ truncatee }}" 
					tooltip-placement="right" 
					tooltip-enable="truncatee.length > maxLength && useTooltip"
					tooltip-class="truncate-tooltip">
						{{ truncatee | truncate:(maxLength || truncatee.length) }}
			</span>`
	};
};

export default truncator