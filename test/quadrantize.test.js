'use strict';
const expect = require('chai').expect;
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

describe('Utils', function () {
    describe('#quadrantize()', () => {
        
        it('should return an object with 4 quadrant properties if given "southwest" and "notheast" coordinates', () => {
            const quadrants = quadrantize(westDenver.southwest, westDenver.northeast);
            expect(quadrants).to.have.property('SW');
            expect(quadrants).to.have.property('NW');
            expect(quadrants).to.have.property('NE');
            expect(quadrants).to.have.property('SE');
        });
    });
});



const westDenverQuadrants = quadrantize(westDenver.southwest, westDenver.northeast);

console.log(westDenverQuadrants);

