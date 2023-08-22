const { makeSpotifyRequest } = require('../../services/spotify.service');

module.exports = {
	getPlaybackState,
	doTransferPlayback,
	getAvailDevices,
	getCurrPlay,
	playOnDevice,
	pauseOnDevice,
	nextOnDevice
};

function getPlaybackState(accessToken, market = "", type = "") {
	const url = `https://api.spotify.com/v1/me/player?${market ? `market=${market}` : ""}${type ? `&additional_types=${type}` : ""}`
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function doTransferPlayback(accessToken, deviceId, isPlay = false) {
	const url = "https://api.spotify.com/v1/me/player"
	const method = "put"
	const bodyParams = {
		"device_ids": [deviceId],
		"play": isPlay
	}

	return makeSpotifyRequest(url, method, accessToken, bodyParams)
}

function getAvailDevices(accessToken) {
	const url = "https://api.spotify.com/v1/me/player/devices"
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function getCurrPlay(accessToken, market = "", type = "") {
	const url = `https://api.spotify.com/v1/me/player/currently-playing${(market || type) ? "?" : ""}${market ? `market=${market}` : ""}${type ? `&additional_types=${type}` : ""}`
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function playOnDevice(accessToken, deviceId = "", contextUri = "", uris = "", offset = "", positionMs = 0) {
	const url = `https://api.spotify.com/v1/me/player/play${deviceId ? `?device_id=${deviceId}` : ""}`
	const method = "put"
	const bodyParams = {
		"context_uri": contextUri,
		uris,
		offset,
		"position_ms": positionMs,
	}

	return makeSpotifyRequest(url, method, accessToken, bodyParams)
}

function pauseOnDevice(accessToken, deviceId = "") {
	const url = `https://api.spotify.com/v1/me/player/pause${deviceId ? `?device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function nextOnDevice(accessToken, deviceId = "") {
	const url = `https://api.spotify.com/v1/me/player/next${deviceId ? `?device_id=${deviceId}` : ""}`
	const method = "post"

	return makeSpotifyRequest(url, method, accessToken)
}




