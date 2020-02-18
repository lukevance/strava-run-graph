const fetch = require('node-fetch');
const env = require('./env.json');

module.exports.topTen = async (southwest, northeast) => {
    const url = "https://www.strava.com/api/v3/segments/explore"
    const queryParams = `?activity_type=running&bounds=${southwest.latitude}, ${southwest.longitude}, ${northeast.latitude}, ${northeast.longitude}`;
    const options = {
        headers: {
            Authorization: `Bearer ${env.STRAVATOKEN}`
        }
    };
    const res = await fetch(`${url}${queryParams}`, options);
    const json = await res.json();
    return json;
};