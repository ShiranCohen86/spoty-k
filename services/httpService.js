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


async function ajax(endpoint, method = 'GET', { queryParams = "", bodyParams = "" } = "") {
    try {
        const alsStore = asyncLocalStorage.getStore()
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${alsStore.spotifyToken}`
        }

        const dataParams = {}
        let queryStr = ""
        if (queryParams) {
            dataParams.queryParams = queryParams
            queryStr = convertObjToQueryStr(dataParams.queryParams)
        }
        if (bodyParams) {
            dataParams.bodyParams = bodyParams
        }

        if ((endpoint.includes("images") && (method === "PUT"))) {
            headers["Content-Type"] = "image/jpeg"
        }
        const axiosOptions = {
            url: `${BASE_URL}${endpoint}${queryStr}`,
            method,
            headers,
        }

        if (method !== 'GET') {
            const bodyParams = dataParams?.bodyParams || false
            if (bodyParams) {
                axiosOptions.data = bodyParams
            }
        }
        console.log(axiosOptions);
        return await axios(axiosOptions)
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint},`)// with data: ${data}`)

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
