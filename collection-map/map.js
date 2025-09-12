var urlParams = new URLSearchParams(window.location.search);
var collectionPointMarker = L.icon({
    iconUrl: 'images/collection-point.avif',
    iconSize: [32, 48],
    iconAnchor: [16, 48],
    popupAnchor: [0, -48]
});

let viewerLocation = urlParams.get('location') ?? 'germany';
let viewerCity = cities.find(city => city.url === viewerLocation);

let viewCoordinates, zoom;
if (viewerLocation === 'germany' || viewerCity === undefined) {
    viewCoordinates = [51.1, 10.34];
    zoom = 6;
} else {
    viewCoordinates = viewerCity.latLong;
    zoom = 13;
}

let map = L.map('map').setView(viewCoordinates, zoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let orgElement = document.getElementById('organizations');

if (viewerLocation === 'germany' || viewerCity === undefined) {
    // alle Städte anzeigen
    for (let city of cities) {
        let marker = L.marker(city.latLong, { icon: collectionPointMarker }).addTo(map);
        marker.bindPopup(`<b>${city.name}</b><br><a href="index.html?location=${city.url}">Sammelstellen anzeigen</a>`);
    }
} else {
    // Sammelstellen der Stadt anzeigen
    for (let cp of viewerCity.collectionPoints) {
        let marker = L.marker(cp.latLong, { icon: collectionPointMarker }).addTo(map);
        marker.bindPopup(`<b>${cp.name}</b>`);
    }

    // Liste der Sammelstellen rendern
    orgElement.innerHTML = `<h2>Sammelstellen in ${viewerCity.name}</h2>`;
    let ul = document.createElement('ul');
    for (let cp of viewerCity.collectionPoints) {
        let li = document.createElement('li');
        li.textContent = cp.name;
        ul.appendChild(li);
    }
    orgElement.appendChild(ul);
}
