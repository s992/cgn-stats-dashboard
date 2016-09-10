class InfoModel {
	constructor() {
		this.players = null;
		this.maps = null;
		this.checkpoints = null;
		this.bonuses = null;
	}
	populate( data ) {
		angular.extend( this, data );
	}
}

InfoModel.$inject = [];

export default InfoModel