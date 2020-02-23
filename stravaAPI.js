const fetch = require('node-fetch');
const env = require('./env.json');

module.exports.topTenSegments = async (southwest, northeast) => {
    // convert all coordinates to strings
    const swLat = southwest.latitude.toString();
    const swLong = southwest.longitude.toString();
    const neLat = northeast.latitude.toString();
    const neLong = northeast.longitude.toString();
    const url = "https://www.strava.com/api/v3/segments/explore"
    const queryParams = `?activity_type=running&bounds=${swLat},${swLong},${neLat},${neLong}`;
    const completeURL = url + queryParams;
    const options = {
        headers: {
            Authorization: `Bearer ${env.STRAVATOKEN}`
        }
    };
    const res = await fetch(completeURL, options);
    const json = await res.json();
    return json;
};