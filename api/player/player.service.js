
const { makeSpotifyRequest, convertObjToQueryStr } = require('../../services/spotify.service');
const { httpGet, httpPut, httpPost, httpDelete } = require('../../services/httpService');

module.exports = {
	getPlaybackState,
	transferPlayback,
	getAvailDevices,
	getCurrPlay,
	play,
	pause,
	next,
	previous,
	seekToPosition,
	setRepeatMode,
	setVolume,
	toggleShuffle,
	getRecentlyPlayed,
	getQueue,
	addToQueue
};

function getPlaybackState(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			additional_types: queryParams?.type
		}
	}
	return httpGet("/me/player", dataParams)
}

function transferPlayback(bodyParams) {
	const dataParams = {
		bodyParams: {
			device_ids: bodyParams.ids,
			play: bodyParams?.isPlay
		}
	}
	return httpPut(`/me/player`, dataParams)
}

function getAvailDevices() {
	return httpGet("/me/player/devices")
}

function getCurrPlay(queryParams) {
	const dataParams = {
		queryParams: {
			market: queryParams?.market,
			additional_types: queryParams?.type
		}
	}
	return httpGet("/me/player/currently-playing", dataParams)
}

function play({ queryParams, bodyParams }) {
	const dataParams = {
		queryParams: {
			device_id: queryParams?.id,
		},
		bodyParams: {
			context_uri: bodyParams?.contextUri,
			uris: bodyParams?.uris,
			offset: bodyParams?.offset,
			position_ms: bodyParams?.positionMs,
		}
	}
	return httpPut("/me/player/play", dataParams)
}

function pause(queryParams) {
	const dataParams = {
		queryParams: {
			device_id: queryParams?.id,
		}
	}
	return httpPut("/me/player/pause", dataParams)
}

function next(queryParams) {
	const dataParams = {
		queryParams: {
			device_id: queryParams?.id,
		}
	}
	return httpPost("/me/player/next", dataParams)
}

function previous(queryParams) {
	const dataParams = {
		queryParams: {
			device_id: queryParams?.id,
		}
	}
	return httpPost("/me/player/previous", dataParams)
}

function seekToPosition(queryParams) {
	const dataParams = {
		queryParams: {
			device_id: queryParams?.id,
			position_ms: queryParams.ms
		}
	}
	return httpPut("/me/player/seek", dataParams)

}

function setRepeatMode(queryParams) {
	const dataParams = {
		queryParams: {
			device_id: queryParams?.id,
			state: queryParams.state
		}
	}
	return httpPut("/me/player/repeat", dataParams)
}

function setVolume(queryParams) {
	const dataParams = {
		queryParams: {
			device_id: queryParams?.id,
			volume_percent: queryParams.volume
		}
	}
	return httpPut("/me/player/volume", dataParams)
}

function toggleShuffle(queryParams) {
	const dataParams = {
		queryParams: {
			device_id: queryParams?.id,
			state: queryParams.state
		}
	}
	return httpPut("/me/player/shuffle", dataParams)
}

function getRecentlyPlayed(queryParams) {
	const dataParams = {
		queryParams: {
			limit: queryParams?.limit,
			after: queryParams?.after,
			before: queryParams?.before,
		}
	}
	return httpGet("/me/player/recently-played", dataParams)
}

function getQueue() {
	return httpGet("/me/player/queue")
}

function addToQueue(queryParams) {
	const dataParams = {
		queryParams: {
			uri: queryParams.uri,
			device_id: queryParams?.id,
		}
	}
	return httpPost("/me/player/queue", dataParams)
}