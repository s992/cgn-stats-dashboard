import RecordSet from "./recordSet";

class Player {
	constructor( PlayerService, SteamService, playerId ) {
		this.playerService = PlayerService;
		this.steamService = SteamService;

		this.id = playerId;
		this.name = "";
		this.rank = 0;
		this.points = 0;
		this.percentCompletion = 0;
		this.hudConfig = "";
		this.lastSeen = "";
		this.timePlayed = "";
		this.rankTag = "";
		this.group = "";

		this.steam = {
			id: "",
			avatar: "",
			url: ""
		};

		this.completionCounts = {
			map: 0,
			stage: 0,
			bonus: 0
		};

		this.recordCounts = {
			map: 0,
			stage: 0,
			bonus: 0
		};

		this.completions = {
			map: new RecordSet( this.searchMapCompletions.bind(this), this.getMapCompletions.bind(this) ),
			stage: new RecordSet( this.searchStageCompletions.bind(this), this.getStageCompletions.bind(this) ),
			bonus: new RecordSet( this.searchBonusCompletions.bind(this), this.getBonusCompletions.bind(this) )
		};

		this.incomplete = {
			map: new RecordSet( this.searchIncompleteMaps.bind(this), this.getIncompleteMaps.bind(this) ),
			stage: new RecordSet( this.searchIncompleteStages.bind(this), this.getIncompleteStages.bind(this) ),
			bonus: new RecordSet( this.searchIncompleteBonuses.bind(this), this.getIncompleteBonuses.bind(this) )
		};

		this.records = {
			map: new RecordSet( null, this.getMapRecords.bind(this) ),
			stage: new RecordSet( null, this.getStageRecords.bind(this) ),
			bonus: new RecordSet( null, this.getBonusRecords.bind(this) )
		};

		this.activity = [];
		this.favoriteMaps = [];
	}

	loadProfile( loadSteam = true ) {
		let promise = this.playerService.getProfile( this.id ).then( this.populateProfile.bind( this ) );

		if( loadSteam ) {
			promise.then( this.loadSteamProfile.bind( this ) );
		}

		return promise;
	}

	populateProfile( source ) {
		angular.extend( this, {
			name: source.name,
			rank: source.rank,
			points: source.points,
			percentCompletion: source.percentCompletion,
			hudConfig: source.hudConfig,
			lastSeen: source.lastSeen,
			timePlayed: source.timePlayed,
			rankTag: source.tag,
			group: source.group,
			steam: {
				id: source.steamid
			},
			completionCounts: {
				map: source.mapsCompleted,
				stage: source.stagesCompleted,
				bonus: source.bonusesCompleted
			},
			recordCounts: {
				map: source.mapRecords,
				stage: source.stageRecords,
				bonus: source.bonusRecords
			}
		});

		return this;
	}

	loadActivity() {
		return this.playerService.getActivity( this.id ).then(activity => {
			this.activity = activity;
			return this;
		});
	}

	loadFavoriteMaps() {
		return this.playerService.getFavoriteMaps( this.id ).then(favorites => {
			this.favoriteMaps = favorites;
			return this;
		});
	}

	loadSteamProfile() {
		return this.steamService.getProfiles( this.steam.id ).then(profile => {
			this.steam.avatar = profile.avatarfull;
			this.steam.url = profile.profileurl;

			return this;
		});
	}

	getMapCompletions( page ) {
		return this.playerService.getCompletedMaps( this.id, page );
	}

	searchMapCompletions( searchString, page ) {
		return this.playerService.searchCompletedMaps( this.id, searchString, page );
	}

	getIncompleteMaps( page ) {
		return this.playerService.getIncompleteMaps( this.id, page );
	}

	searchIncompleteMaps( searchString, page ) {
		return this.playerService.searchIncompleteMaps( this.id, searchString, page );
	}

	getStageCompletions( page ) {
		return this.playerService.getCompletedCheckpoints( this.id, page );
	}

	searchStageCompletions( searchString, page ) {
		return this.playerService.searchCompletedCheckpoints( this.id, searchString, page );
	}

	getIncompleteStages( page ) {
		return this.playerService.getIncompleteCheckpoints( this.id, page );
	}

	searchIncompleteStages( searchString, page ) {
		return this.playerService.searchIncompleteCheckpoints( this.id, searchString, page );
	}

	getBonusCompletions( page ) {
		return this.playerService.getCompletedBonuses( this.id, page );
	}

	searchBonusCompletions( searchString, page ) {
		return this.playerService.searchCompletedBonuses( this.id, searchString, page );
	}

	getIncompleteBonuses( page ) {
		return this.playerService.getIncompleteBonuses( this.id, page );
	}

	searchIncompleteBonuses( searchString, page ) {
		return this.playerService.searchIncompleteBonuses( this.id, searchString, page );
	}

	getMapRecords( page ) {
		return this.playerService.getMapRecords( this.id, page );
	}

	getStageRecords( page ) {
		return this.playerService.getStageRecords( this.id, page );
	}

	getBonusRecords( page ) {
		return this.playerService.getBonusRecords( this.id, page );
	}

	getNormalizedGroup() {
		if( !this.group ) {
			return "";
		}

		return this.group.toLowerCase().replace(/\s/g, "");
	}
}

class PlayerFactory {
	constructor( PlayerService, SteamService ) {
		this.playerService = PlayerService;
		this.steamService = SteamService;
	}
	forId( playerId ) {
		return new Player( this.playerService, this.steamService, playerId );
	}
	static factory( PlayerService, SteamService ) {
		return new PlayerFactory( PlayerService, SteamService );
	}
}

PlayerFactory.$inject = ["PlayerService", "SteamService"];

export default PlayerFactory;