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

function formatOpeningHours(openingHours) {
    if (!openingHours) return '';
    return openingHours.map(oh => `${oh.day}: ${oh.times.join(', ')}`).join('<br>');
}

function formatDuration(duration) {
    if (!duration) return '';
    return `Sammelzeitraum: ${duration.from} - ${duration.to}`;
}

if (viewerLocation === 'germany' || viewerCity === undefined) {
    // Städte-Übersicht
    for (let city of cities) {
        let marker = L.marker(city.latLong, { icon: collectionPointMarker }).addTo(map);
        marker.bindPopup(`<b>${city.name}</b><br><a href="index.html?location=${city.url}">Sammelstellen anzeigen</a>`);
    }
} else {
    // Sammelstellen-Ansicht
    orgElement.innerHTML = `<h2>Sammelstellen in ${viewerCity.name}</h2>`;
    let ul = document.createElement('ul');

    for (let cp of viewerCity.collectionPoints) {
        let marker = L.marker(cp.latLong, { icon: collectionPointMarker }).addTo(map);

        let popupContent = `<b>${cp.name}</b>`;
        if (cp.organization) popupContent += `<br>${cp.organization}`;
        if (cp.openingHours) popupContent += `<br>${formatOpeningHours(cp.openingHours)}`;
        if (cp.duration) popupContent += `<br>${formatDuration(cp.duration)}`;
        marker.bindPopup(popupContent);

        // Liste
        let li = document.createElement('li');
        li.innerHTML = `<b>${cp.name}</b>`;
        if (cp.organization) li.innerHTML += `<br>${cp.organization}`;
        if (cp.openingHours) li.innerHTML += `<br>${formatOpeningHours(cp.openingHours)}`;
        if (cp.duration) li.innerHTML += `<br>${formatDuration(cp.duration)}`;
        ul.appendChild(li);
    }

    orgElement.appendChild(ul);
}
