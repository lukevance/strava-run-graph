const getCenter = require('geolib').getCenter;

module.exports = (southwest, northeast) => {
    const boundaryCenter = getCenter([southwest, northeast]);

    // return quadrants object
    return {
        SW: {
            sw: southwest,
            ne: boundaryCenter
        },
        NW: {
            sw: {
                latitude: boundaryCenter.latitude,
                longitude: southwest.longitude
            },
            ne: {
                latitude: northeast.latitude,
                longitude: boundaryCenter.longitude
            }
        },
        NE: {
            sw: boundaryCenter,
            ne: northeast
        },
        SE: {
            sw: {
                latitude: southwest.latitude,
                longitude: boundaryCenter.longitude
            },
            ne: {
                latitude: boundaryCenter.latitude,
                longitude: northeast.longitude
            }
        }
    };
};