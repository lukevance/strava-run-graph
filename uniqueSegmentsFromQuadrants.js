'use strict';
const quadrantize = require('./quadrantize');
const topTenSegmentsInZone = require('./stravaAPI').topTenSegments;

// module.exports = corners => {

// //given southwest and northeast corners, get quadrants
// const quadrants = quadrantize(corners.southwest, corners.northeast);

// const segment = {};

// };

const westDenver = {
    northeast: {
        longitude: "-104.988848",
        latitude: "39.784587"
    },
    southwest: {
        longitude: "-105.053567",
        latitude: "39.740035"
    }
};

const top30Segments = async () => {
    const quadrants = quadrantize(westDenver.southwest, westDenver.northeast);
    // const top40 = Object.keys(quadrants).map(async key => {
    //     return await topTenSegmentsInZone(quadrants[key].sw, quadrants[key].ne);
    // });
    const nw10 = await topTenSegmentsInZone(quadrants.NW.sw, quadrants.NW.ne);
    // const data = await topTenSegmentsInZone(westDenver.southwest, westDenver.northeast);
    // console.log(quadrants.NW.sw);
    // console.log(quadrants.NW.ne);
    console.log(nw10);
    // console.log(quadrants);
};

top30Segments();