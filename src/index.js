const mapboxgl = require("mapbox-gl");
require('./marker');

mapboxgl.accessToken = "pk.eyJ1Ijoib25pZmF1eCIsImEiOiJjamVxMmxsbTIwMmp3MzNwZnk0Nm1taDFsIn0.yC6izMsKXtTQcUL3FBbEcA";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

module.exports = map;


