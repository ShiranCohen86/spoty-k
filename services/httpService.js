const Axios = require('axios');
const { convertObjToQueryStr } = require('./spotify.service');
const asyncLocalStorage = require('./als.service');

const BASE_URL = `https://api.spotify.com/v1`

const axios = Axios.create({
    withCredentials: true
})

function httpGet(endpoint, data) {
    return ajax(endpoint, 'GET', data)
}
function httpPost(endpoint, data) {
    return ajax(endpoint, 'POST', data)
}
function httpPut(endpoint, data) {
    return ajax(endpoint, 'PUT', data)
}
function httpDelete(endpoint, data) {
    return ajax(endpoint, 'DELETE', data)
}


async function ajax(endpoint, method = 'GET', data = {}) {
    try {
        const alsStore = asyncLocalStorage.getStore()
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${alsStore.spotifyToken}`
        }
        /*
        if (method === 'PUT') {
            if ((endpoint === "/me/player")) {

                //queryStr = (data["deviceId"]) ? convertObjToQueryStr({ "device_id": data["deviceId"] }) : ""
            } else if ((endpoint === "/me/player/play")) {

                const queryStr = ((method === 'PUT') && (endpoint === "/me/player/play")) ? convertObjToQueryStr({ "device_id": data["device_id"] }) : ""
                delete data["device_id"]
            }
        } else {

        }

        let queryStr = (((endpoint === "/me/player") && (method === 'PUT')))
        queryStr = (((endpoint === "/me/player/play") && (method === 'PUT')))
        */

        let queryStr = ""
        if ((method === 'PUT') && (endpoint === "/me/player/play")) {
            queryStr = convertObjToQueryStr({ "device_id": data["device_id"] })
            console.log("queryStr", queryStr);
            delete data["device_id"]
        }
        if (method === 'GET') {
            queryStr = convertObjToQueryStr(data)
        }
        console.log({ data });
        const axiosOptions = {
            url: `${BASE_URL}${endpoint}${queryStr}`,
            method,
            headers,
            data
        }
        if (method === 'GET') {
            delete axiosOptions.data
        }

        const res = await axios(axiosOptions)
        return res
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)

        if (err.response && err.response.status === 401) {

        }
        throw err
    }
}


module.exports = {
    httpGet,
    httpPost,
    httpPut,
    httpDelete
}
