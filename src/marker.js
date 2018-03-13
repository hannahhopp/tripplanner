const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: "url(http://i.imgur.com/D9574Cu.png)",
  restaurants: "url(http://i.imgur.com/cqR6pUI.png)",
  activities: "url(http://i.imgur.com/WbMOfMl.png)"
};

const buildMarker = (type, coords) => {
  const markerDOMElement = document.createElement("div");
  markerDOMElement.style.width = "32px";
  markerDOMElement.style.height = "39px";
  markerDOMElement.style.backgroundImage = iconURLs[type];
  return new mapboxgl.Marker(markerDOMElement).setLngLat(coords);
};

module.exports = buildMarker;
