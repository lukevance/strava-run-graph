const fetch = require('node-fetch');
const env = require('./env.json');

module.exports.topTen = async (southwest, northeast) => {
    console.log(env.STRAVATOKEN);
    const url = "https://www.strava.com/api/v3/segments/explore"
    const queryParams = `?activity_type=running&bounds=${southwest.latitude},${southwest.longitude},${northeast.latitude},${northeast.longitude}`;
    const completeURL = url + queryParams;
    const options = {
        headers: {
            Authorization: `Bearer ${env.STRAVATOKEN}`
        }
    };
    console.info(completeURL);
    const res = await fetch(completeURL, options);
    const json = await res.json();
    return json;
};