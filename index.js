// import 'ol/ol.css';
// import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';

// const map = new Map({
//     target: 'map',
//     layers: [
//         new TileLayer({
//             source: new OSM()
//         })
//     ],
//     view: new View({
//         center: [0, 0],
//         zoom: 0
//     })
// });

import Map from 'ol/Map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';

new Map({
    layers: [
        new TileLayer({ source: new OSM() })
    ],
    view: new View({
        center: [0, 0],
        zoom: 2
    }),
    target: 'map'
});