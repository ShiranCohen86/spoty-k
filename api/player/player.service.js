const { makeSpotifyRequest } = require('../../services/spotify.service');

module.exports = {
	getPlaybackState,
	doTransferPlayback,
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

function getPlaybackState(accessToken, market = "", type = "") {
	const url = `https://api.spotify.com/v1/me/player${(market || type) ? "?" : ""}${market ? `market=${market}` : ""}${type ? `${market ? "&" : ""}additional_types=${type}` : ""}`
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
	const url = `https://api.spotify.com/v1/me/player/currently-playing${(market || type) ? "?" : ""}${market ? `market=${market}` : ""}${type ? `${market ? "&" : ""}additional_types=${type}` : ""}`
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function play(accessToken, deviceId = "", contextUri = "", uris = "", offset = "", positionMs = 0) {
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

function pause(accessToken, deviceId = "") {
	const url = `https://api.spotify.com/v1/me/player/pause${deviceId ? `?device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function next(accessToken, deviceId = "") {
	const url = `https://api.spotify.com/v1/me/player/next${deviceId ? `?device_id=${deviceId}` : ""}`
	const method = "post"

	return makeSpotifyRequest(url, method, accessToken)
}

function previous(accessToken, deviceId = "") {
	const url = `https://api.spotify.com/v1/me/player/previous${deviceId ? `?device_id=${deviceId}` : ""}`
	const method = "post"

	return makeSpotifyRequest(url, method, accessToken)
}

function seekToPosition(accessToken, deviceId = "", positionMs) {
	const url = `https://api.spotify.com/v1/me/player/seek?position_ms=${positionMs}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function setRepeatMode(accessToken, deviceId = "", state) {
	const url = `https://api.spotify.com/v1/me/player/repeat?state=${state}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function setVolume(accessToken, deviceId = "", volumePercent) {
	const url = `https://api.spotify.com/v1/me/player/volume?volume_percent=${volumePercent}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function toggleShuffle(accessToken, deviceId = "", state) {
	const url = `https://api.spotify.com/v1/me/player/shuffle?state=${state}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function getRecentlyPlayed(accessToken, limit = "", after = "", before = "") {
	const url = `https://api.spotify.com/v1/me/player/recently-played${(limit || after || before) ? "?" : ""}${limit ? `limit=${limit}` : ""}${(limit) ? "&" : ""}${after ? `after=${after}` : ""}${(after || limit) ? "&" : ""}${before ? `before=${before}` : ""}`
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function getQueue(accessToken) {
	const url = "https://api.spotify.com/v1/me/player/queue"
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function addToQueue(accessToken, deviceId = "", uri) {
	const url = `https://api.spotify.com/v1/me/player/repeat?uri=${uri}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "post"

	return makeSpotifyRequest(url, method, accessToken)
}