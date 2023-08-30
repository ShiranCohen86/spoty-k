const { httpGet, httpPut, httpDelete } = require('../../services/httpService');

module.exports = {
	getTrackById,
	getTracksByIds,
	getSavedTracks,
	addTracksByIds,
	removeTracksByIds,
	isTracksSavedByIds,
	getAudioFeaturesByTracksIds,
	getAudioFeaturesByTrackId,
	getAudioAnalysisByTrackId,
	getRecommendationTracks
};

function getTrackById(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
		}
	}
	return httpGet(`/tracks/${queryParams.trackId}`, dataParams)
}

function getTracksByIds(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			ids: queryParams.ids
		}
	}
	return httpGet(`/tracks`, dataParams)
}

function getSavedTracks(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			limit: queryParams?.limit,
			offset: queryParams?.offset
		}
	}
	return httpGet(`/me/tracks`, dataParams)
}

function addTracksByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},

	}
	return httpPut(`/me/tracks`, dataParams)
}

function removeTracksByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},

	}
	return httpDelete(`/me/tracks`, dataParams)
}

function isTracksSavedByIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},

	}
	return httpGet(`/me/tracks/contains`, dataParams)
}

function getAudioFeaturesByTracksIds(queryParams) {
	const dataParams = {
		queryParams: {
			ids: queryParams.ids,
		},
	}
	return httpGet(`/audio-features`, dataParams)
}

function getAudioFeaturesByTrackId(queryParams) {
	const dataParams = {
		queryParams: {
			id: queryParams.id,
		},
	}
	return httpGet(`/audio-features`, dataParams)
}

function getAudioAnalysisByTrackId(queryParams) {
	return httpGet(`/audio-features/${queryParams.trackId}`, dataParams)
}

function getRecommendationTracks(queryParams) {
	const dataParams = {
		queryParams: {
			limit: queryParams?.limit,
			market: queryParams?.market,
			seed_artists: queryParams?.seedArtists,
			seed_genres: queryParams?.seedGenres,
			seed_tracks: queryParams?.seedTracks,
			min_acousticness: queryParams?.minAcousticness,
			max_acousticness: queryParams?.maxAcousticness,
			target_acousticness: queryParams?.targetAcousticness,
			min_danceability: queryParams?.minDanceability,
			max_danceability: queryParams?.maxDanceability,
			target_danceability: queryParams?.targetDanceability,
			min_duration_ms: queryParams?.minDurationMs,
			max_duration_ms: queryParams?.maxDurationMs,
			target_duration_ms: queryParams?.targetDurationMs,
			min_energy: queryParams?.minEnergy,
			max_energy: queryParams?.maxEnergy,
			target_energy: queryParams?.targetEnergy,
			min_instrumentalness: queryParams?.minInstrumentalness,
			max_instrumentalness: queryParams?.maxInstrumentalness,
			target_instrumentalness: queryParams?.targetInstrumentalness,
			min_key: queryParams?.minKey,
			max_key: queryParams?.maxKey,
			target_key: queryParams?.targetKey,
			min_liveness: queryParams?.minLiveness,
			max_liveness: queryParams?.maxLiveness,
			target_liveness: queryParams?.targetLiveness,
			min_loudness: queryParams?.minLoudness,
			max_loudness: queryParams?.maxLoudness,
			target_loudness: queryParams?.targetLoudness,
			min_mode: queryParams?.minMode,
			max_mode: queryParams?.maxMode,
			target_mode: queryParams?.targetMode,
			min_popularity: queryParams?.minPopularity,
			max_popularity: queryParams?.maxPopularity,
			target_popularity: queryParams?.targetPopularity,
			min_speechiness: queryParams?.minSpeechiness,
			max_speechiness: queryParams?.maxSpeechiness,
			target_speechiness: queryParams?.targetSpeechiness,
			min_tempo: queryParams?.minTempo,
			max_tempo: queryParams?.maxTempo,
			target_tempo: queryParams?.targetTempo,
			min_time_signature: queryParams?.minTimeSignature,
			max_time_signature: queryParams?.maxTimeSignature,
			target_time_signature: queryParams?.targetTimeSignature,
			min_valence: queryParams?.minValence,
			max_valence: queryParams?.maxValence,
			target_valence: queryParams?.targetValence,
		},
	}
	return httpGet(`/audio-features`, dataParams)
}











