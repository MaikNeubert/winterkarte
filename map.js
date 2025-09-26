var urlParams = new URLSearchParams(window.location.search);
var collectionPointMarker = L.icon({
    iconUrl: 'images/collection-point.svg',
    className: 'pincolor01',
    iconSize: [48, 48],
    iconAnchor: [16, 48],
    popupAnchor: [0, -48]
});

function getSupportedOrganisations(orgName) {
    let org = organizations.find(o => o.name === orgName);
    if (!org || !org.supportedOrganisations) return [];
    return org.supportedOrganisations.map(id => supportedOrganisations.find(s => s.id === id)).filter(Boolean);
}

let viewerLocation = urlParams.get('location') ?? 'germany';
let viewerCity = cities.find(city => city.url === viewerLocation);

let viewCoordinates, zoom;
if (viewerLocation === 'germany' || viewerCity === undefined) {
    viewCoordinates = [51.1, 10.34];
    zoom = 6;
    maxZoom = 8;

} else {
    viewCoordinates = viewerCity.latLong;
    zoom = 13;
    maxZoom = 19;
}

let map = L.map('map').setView(viewCoordinates, zoom);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom,
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
    // Karte: Marker für alle Städte
    for (let city of cities) {
        let marker = L.marker(city.latLong, { icon: collectionPointMarker }).addTo(map);
        marker.bindPopup(`<b>${city.name}</b><br><a href="index.html?location=${city.url}">Sammelstellen anzeigen</a>`);
    }

    // Liste: Alle Städte
    orgElement.innerHTML = `<h2>Städte mit Sammelstellen</h2>`;
    let ul = document.createElement('ul');

    for (let city of cities) {
        let li = document.createElement('li');
        let sammelstellen = city.collectionPoints.length > 1 ? "Sammelstellen" : "Sammelstelle";
        li.innerHTML = `
                <div class="cities"><a href="index.html?location=${city.url}"><b>${city.name}</b></a> </div>
                <div style="display: grid; grid-template-columns: 130px auto">
                    <img src="images/Strich.svg" width="100" height="50" style="transform: translate(20px)" />
                    <div style="transform: translate(0, 20px)">${city.collectionPoints.length} ${sammelstellen}</div>
                </div>
            `;
        ul.appendChild(li);
    }

    orgElement.appendChild(ul);
} else {
    // Sammelstellen-Ansicht
    orgElement.innerHTML = `<h2>Sammelstellen in ${viewerCity.name}</h2>`;

    // 1. Organisation(en) in dieser Stadt
    let cityOrgs = organizations.filter(o => o.cities.includes(viewerCity.name));
    if (cityOrgs.length > 0) {
        orgElement.innerHTML += `<h4>Organisationen:</h4><ul>` +
            cityOrgs.map(o => `<li>${o.name}</li>`).join('') +
            `</ul>`;
    }

    // 2. Unterstützte Organisationen (Spendenziele)
    let supported = [];
    for (let org of cityOrgs) {
        let targets = getSupportedOrganisations(org.name);
        supported.push(...targets);
    }
    supported = [...new Set(supported)]; // Duplikate entfernen
    if (supported.length > 0) {
        orgElement.innerHTML += `<h4>Unterstützt:</h4><ul>` +
            supported.map(t => `<li>${t.name} (${t.country}${t.region ? ', ' + t.region : ''})</li>`).join('') +
            `</ul>`;
    }

    // 3. Sammelstellen auflisten
    orgElement.innerHTML += `<h4>Sammelstellen:</h4>`;
    let ul = document.createElement('ul');

    for (let cp of viewerCity.collectionPoints) {
        // Marker auf der Karte
        let marker = L.marker(cp.latLong ?? viewerCity.latLong, { icon: collectionPointMarker }).addTo(map);

        let popupContent = `<b>${cp.name}</b>`;
        if (cp.organization) popupContent += `<br>${cp.organization}`;
        if (cp.openingHours) popupContent += `<br>${formatOpeningHours(cp.openingHours)}`;
        if (cp.duration) popupContent += `<br>${formatDuration(cp.duration)}`;
        marker.bindPopup(popupContent);

        // Kompakte Liste mit Details
        let li = document.createElement('li');
        li.style.marginBottom = "10px";

        li.innerHTML = `
            <details style="padding: 5px; margin: 0">
                <summary>${cp.name}</summary>
                ${cp.address ? `<div>${cp.address.street} ${cp.address.house}, ${cp.address.postalCode}</div>` : ''}
                ${cp.openingHours ? `<div><i>${formatOpeningHours(cp.openingHours)}</i></div>` : ''}
                ${cp.duration ? `<div>${formatDuration(cp.duration)}</div>` : ''}
            </details>
        `;

        ul.appendChild(li);
    }

    orgElement.appendChild(ul);
}

function debounce(callback, delay = 20) {
    let time;

    return (...args) => {
        clearTimeout(time);
        time = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

const resizeMap = debounce(() => {
    if (window.innerWidth < 1024) {
        document.getElementById("map").style.width = window.innerWidth - 20 + "px";
    } else {
        document.getElementById("map").style.width = window.innerWidth / 2 + "px";
    }
    const maxHeight = 600;
    if (window.innerHeight / 1.5 < maxHeight) {
        document.getElementById("map").style.height = window.innerHeight / 1.5 + "px";
    } else {
        document.getElementById("map").style.height = maxHeight + "px";
    }


    map.invalidateSize(true);
});

addEventListener("resize", (event) => {
    resizeMap();
});
resizeMap();