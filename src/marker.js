const mapbox = require('mapbox-gl');
const map = require('./index');

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = (type, coords) => {
  const markerDOMElement = document.createElement("div");
  markerDOMElement.style.width = "32px";
  arkerDOMElement.style.height = "39px";
  markerDOMElement.style.backgroundImage = iconURLs[type];
  return new mapboxgl.Marker(markerDOMElement).setLngLat(coords).addTo(map);
};

module.exports = buildMarker;
