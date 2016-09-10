import RecordSet from "app/common/model/recordSet";

class MapListController {
	constructor( MapService ) {
		this.mapService = MapService;
		this.maps = new RecordSet( this.mapService.searchBigList.bind( this.mapService ), this.mapService.getBigList.bind( this.mapService ) );
		this.maps.pageSize = 25;
		this.init();
	}

	init() {
		this.maps.setSort( "name", "asc", false );
		this.maps.loadPage(1);
	}

	setSort( column ) {
		let direction;

		if( this.maps.sort.by === column ) {
			direction = this.maps.sort.direction === "asc" ? "desc" : "asc";
		}

		this.maps.setSort( column, direction );
	}
}

MapListController.$inject = ["MapService"];

export default MapListController;