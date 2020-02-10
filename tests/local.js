import {getCenter} from 'geolib';

const highlandsCoordinates = {
    latitude: "",
    longitude: ""
};

const center = getCenter([
    highlandsCoordinates
]);

console.log(center);