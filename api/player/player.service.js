
const { makeSpotifyRequest, convertObjToQueryStr } = require('../../services/spotify.service');
const { httpGet, httpPut } = require('../../services/httpService');

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


//getPlaybackState("text", { market: "test1", type: "test2" })
function getPlaybackState(data) {
	return httpGet("/me/player", data)
}

function doTransferPlayback(data) {
	return httpPut("/me/player", data)

}

function getAvailDevices() {
	return httpGet("/me/player/devices")
}

function getCurrPlay(data) {
	return httpGet("/me/player/currently-playing", data)
}

function play(data) {
	return httpPut("/me/player/play", data)
}

function pause(data) {
	return httpPut("/me/player/pause", data)
}

function next(deviceId = "") {
	const url = `https://api.spotify.com/v1/me/player/next${deviceId ? `?device_id=${deviceId}` : ""}`
	const method = "post"

	return makeSpotifyRequest(url, method, accessToken)
}

function previous(deviceId = "") {
	const url = `https://api.spotify.com/v1/me/player/previous${deviceId ? `?device_id=${deviceId}` : ""}`
	const method = "post"

	return makeSpotifyRequest(url, method, accessToken)
}

function seekToPosition(deviceId = "", positionMs) {
	const url = `https://api.spotify.com/v1/me/player/seek?position_ms=${positionMs}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function setRepeatMode(deviceId = "", state) {
	const url = `https://api.spotify.com/v1/me/player/repeat?state=${state}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function setVolume(deviceId = "", volumePercent) {
	const url = `https://api.spotify.com/v1/me/player/volume?volume_percent=${volumePercent}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function toggleShuffle(deviceId = "", state) {
	const url = `https://api.spotify.com/v1/me/player/shuffle?state=${state}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "put"

	return makeSpotifyRequest(url, method, accessToken)
}

function getRecentlyPlayed(limit = "", after = "", before = "") {
	const url = `https://api.spotify.com/v1/me/player/recently-played${(limit || after || before) ? "?" : ""}${limit ? `limit=${limit}` : ""}${(limit) ? "&" : ""}${after ? `after=${after}` : ""}${(after || limit) ? "&" : ""}${before ? `before=${before}` : ""}`
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function getQueue(accessToken) {
	const url = "https://api.spotify.com/v1/me/player/queue"
	const method = "get"

	return makeSpotifyRequest(url, method, accessToken)
}

function addToQueue(deviceId = "", uri) {
	const url = `https://api.spotify.com/v1/me/player/repeat?uri=${uri}${deviceId ? `&device_id=${deviceId}` : ""}`
	const method = "post"

	return makeSpotifyRequest(url, method, accessToken)
}