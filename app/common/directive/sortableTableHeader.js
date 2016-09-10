let sortableTableHeader = () => {
	return {
		restrict: "A",
		replace: true,
		scope: {
			sorter: "&",
			recordSet: "=",
			columnTitle: "@",
			columnName: "@",
			class: "@"
		},
		template:
			`<th class="sortable-table-header {{:: class }}" ng-click="sorter()">
				{{:: columnTitle }}
				<span 
					class="glyphicon"
					ng-show="recordSet.sort.by === columnName"
					ng-class="{
						'glyphicon-chevron-up': recordSet.sort.direction === 'asc',
						'glyphicon-chevron-down': recordSet.sort.direction === 'desc'
					}"></span>
			</th>`
	};
};

export default sortableTableHeader