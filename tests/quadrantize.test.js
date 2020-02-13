const quadrantize = require('../quadrantize');

const westDenver = {
    southwest: {
        latitude: "-105.053995",
        longitude: "39.742223"
    },
    northeast: {
        latitude: "-105.020048",
        longitude: "39.785519"
    }
};

const westDenverQuadrants = quadrantize(westDenver.southwest, westDenver.northeast);

console.log(westDenverQuadrants);