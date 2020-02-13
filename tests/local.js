const getCenterOfBounds = require('geolib').getCenterOfBounds;

const originalBoundary = {
    southwest: {
        latitude: "-105.053995",
        longitude: "39.742223"
    },
    northeast: {
        latitude: "-105.020048",
        longitude: "39.785519"
    }
};

const boundaryCenter = getCenterOfBounds([
    originalBoundary.southwest,
    originalBoundary.northeast
]);

const quadrants = {
    SW: {
        sw: originalBoundary.southwest,
        ne: boundaryCenter
    },
    NW: {
        sw: "",
        ne: ""
    },
    NE: {
        sw: boundaryCenter,
        ne: originalBoundary.northeast
    },
    SE: {
        sw: "",
        ne: ""
    }
}

console.log(westDenverCenter);