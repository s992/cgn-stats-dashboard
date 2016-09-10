import RecordSet from "./recordSet";

class Map {
	constructor( MapService, mapId ) {
		this.mapService = MapService;

		this.id = mapId;
		this.name = "";
		this.type = "";
		this.tier = "";
		this.author = "";
		this.checkpoints = 0;
		this.bonuses = 0;
		this.completionCount = 0;
		this.lastPlayed = "";
		this.completions = new RecordSet( this.searchCompletions.bind(this), this.getCompletions.bind(this) );

		this.activity = [];
		this.topPlayers = [];
		this.records = {
			checkpoints: [],
			bonuses: []
		};

		// stats included for someone who is logged in
		this.playerStats = {
			completionDate: "",
			rank: ""
		};

		// group points
		this.groups = [];
		this.top10 = [];
		this.mapCompletionPoints = 0;
		this.stageCompletionPoints = 0;
		this.bonusCompletionPoints = 0;
		this.stageRecordPoints = 0;
		this.bonusRecordPoints = 0;
		this.totalPoints = 0;
	}

	load() {
		return this.mapService.getMap( this.id ).then( this.populate.bind(this) );
	}

	populate( source ) {
		angular.extend( this, {
			name: source.name,
			type: source.type,
			tier: source.tier,
			author: source.author,
			checkpoints: source.checkpoints,
			bonuses: source.bonuses,
			completionCount: source.completions,
			lastPlayed: source.lastPlayed,
			playerStats: {
				completionDate: source.playerCompletionDate,
				rank: source.playerRank
			},
			groups: source.groups,
			top10: source.top10,
			mapCompletionPoints: source.mapCompletionPoints,
			stageCompletionPoints: source.stageCompletionPoints,
			bonusCompletionPoints: source.bonusCompletionPoints,
			stageRecordPoints: source.stageRecordPoints,
			bonusRecordPoints: source.bonusRecordPoints,
			totalPoints: source.totalPoints
		});

		return this;
	}

	loadActivity() {
		return this.mapService.getActivity( this.id ).then(activity => {
			this.activity = activity;
			return this;
		});
	}

	loadTopPlayers() {
		return this.mapService.getTopPlayers( this.id ).then(topPlayers => {
			this.topPlayers = topPlayers;
			return this;
		});
	}

	loadCheckpointRecords() {
		return this.mapService.getCheckpointRecords( this.id ).then(records => {
			this.records.checkpoints = records;
			return this;
		});
	}

	loadBonusRecords() {
		return this.mapService.getBonusRecords( this.id ).then(records => {
			this.records.bonuses = records;
			return this;
		});
	}

	getCompletions( page ) {
		return this.mapService.getCompletions( this.id, page );
	}

	searchCompletions( searchString, page ) {
		return this.mapService.searchCompletions( this.id, searchString, page );
	}
}

class MapFactory {
	constructor( MapService ) {
		this.mapService = MapService;
	}
	forId( mapId ) {
		return new Map( this.mapService, mapId );
	}
	static factory( MapService ) {
		return new MapFactory( MapService );
	}
}

MapFactory.$inject = ["MapService"];

export default MapFactory;