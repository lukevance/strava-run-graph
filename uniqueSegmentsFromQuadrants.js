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
    // const top40 = Object.keys(quadrants);
    // const top40 = ["NW", "NE", "SE", "SW"].map(async key => {
    //     return await topTenSegmentsInZone(quadrants[key].sw, quadrants[key].ne);
    // });
    const nw10 = await topTenSegmentsInZone(quadrants.NW.sw, quadrants.NW.ne);
    const ne10 = await topTenSegmentsInZone(quadrants.NE.sw, quadrants.NE.ne);
    const se10 = await topTenSegmentsInZone(quadrants.SE.sw, quadrants.SE.ne);
    const sw10 = await topTenSegmentsInZone(quadrants.SW.sw, quadrants.SW.ne);
    const top40 = await nw10.segments.concat(ne10.segments).concat(se10.segments).concat(sw10.segments);
    // const data = await topTenSegmentsInZone(westDenver.southwest, westDenver.northeast);
    
    // console.log("nw10", nw10);
    // console.log("ne10", ne10.segments.length);
    // console.log("se10", se10.segments.length);
    // console.log("sw10", sw10.segments.length);
    // console.log(quadrants.NW.ne);
    console.log(JSON.stringify(top40));
    // console.log(quadrants);
};

top30Segments();