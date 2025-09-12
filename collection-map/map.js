var urlParams = new URLSearchParams(window.location.search)


var collectionPointMarker = L.icon({
    iconUrl: 'images/collection-point.avif',

    iconSize:     [32, 48], // size of the icon
    iconAnchor:   [16, 48], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -48] // point from which the popup should open relative to the iconAnchor
});

let viewerLocation = urlParams.get('location') ?? 'germany';

let viewerCity = cities.find(city => city.url === viewerLocation);
if (viewerLocation === 'germany' || viewerCity === undefined) {
    viewCoordinates = [51.1, 10.34];
    zoom = 6;
} else {
    viewCoordinates = viewerCity.latLong;
    zoom = 13;
}


var map = L.map('map').setView(viewCoordinates, zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


if (location === 'germany' || viewerCity === undefined) {
    for (city of cities) {
        let marker = L.marker(city.latLong, { icon: collectionPointMarker }).addTo(map);
        marker.bindPopup(`<b>${city.name}</b><br><a href="index.html?location=${city.url}">Sammelstellen anzeigen</a>`);
    }
} else {
    for (collectionPoint of collectionPoints) {
        let marker = L.marker(collectionPoint.latLong, { icon: collectionPointMarker }).addTo(map);
        marker.bindPopup(`<b>${collectionPoint.name}</b>`);
    }
}
