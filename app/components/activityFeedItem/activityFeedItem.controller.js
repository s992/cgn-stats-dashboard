class ActivityFeedItemController {
	getType() {
		let type = this.activity.type,
			stage = this.activity.checkpoint;

		if( type == "0" && stage == "0" ) {
			return "map";
		}

		if( type == "0" && stage != "0" ) {
			return "stage";
		}

		if( type != "0" ) {
			return "bonus";
		}
	}

	getMessage() {
		let type = this.getType();

		if( this.activity.rank == "1" ) {
			switch( type ) {
				case "map":
					return `Beat the map WR for`;
				case "stage":
					return `Beat the stage ${this.activity.checkpoint} WR for`
				case "bonus":
					return `Beat the bonus ${this.activity.checkpoint} WR for`
			}
		} else {
			switch( type ) {
				case "map":
					return `Finished with rank ${this.activity.rank} for`;
				case "stage":
					return `Finished with rank ${this.activity.rank} for stage ${this.activity.checkpoint} of`
				case "bonus":
					return `Finished with rank ${this.activity.rank} for bonus ${this.activity.checkpoint} of`
			}
		}
	}
}

ActivityFeedItemController.$inject = [];

export default ActivityFeedItemController;