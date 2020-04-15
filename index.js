// 1.
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

// 2.
// import Map from 'ol/Map';
// import View from 'ol/View';
// import OSM from 'ol/source/OSM';
// import TileLayer from 'ol/layer/Tile';

// new Map({
//     layers: [
//         new TileLayer({ source: new OSM() })
//     ],
//     view: new View({
//         center: [-13553864, 5918250],
//         zoom: 11,
//         minZoom: 9,
//         maxZoom: 13
//     }),
//     target: 'map'
// });

// 3.

// import { Map, View } from 'ol';
// import TileLayer from 'ol/layer/Tile';
// import TileWMS from 'ol/source/TileWMS';

// var map = new Map({
//     target: 'map',
//     view: new View({
//         projection: 'EPSG:3857', //HERE IS THE VIEW PROJECTION
//         center: [0, 0],
//         zoom: 2
//     }),
//     layers: [
//         new TileLayer({
//             source: new TileWMS({
//                 projection: 'EPSG:4326', //HERE IS THE DATA SOURCE PROJECTION
//                 url: 'http://demo.boundlessgeo.com/geoserver/wms',
//                 params: {
//                     'LAYERS': 'ne:NE1_HR_LC_SR_W_DR'
//                 }
//             })
//         })
//     ]
// });


import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';


var key = 'URx8zazIasV8K2Y4stLd';
var attributions = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
    '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

var map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new XYZ({
                attributions: attributions,
                url: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key
            })
        })
    ],
    view: new View({
        center: [-13553864, 5918250],
        zoom: 11,
        minZoom: 9,
        maxZoom: 13
    })
});