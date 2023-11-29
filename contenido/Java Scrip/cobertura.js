 // Función para establecer el desplazamiento en la parte superior
function scrollToTop() {
    window.scrollTo(0, 0);
}
window.onload = scrollToTop;
document.addEventListener("DOMContentLoaded", function() {
    // Agrega la clase 'appear' al contenido después de un tiempo (ajusta según sea necesario)
    setTimeout(function() {
        document.getElementById("content").classList.add("appear");
    }, 500); // 500 milisegundos (0.5 segundos) es un ejemplo, ajusta según sea necesario
});

//mapa
let map = L.map('map').setView([-9.3744108, -76.2981604], 6)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-cobertura').addEventListener('change', function (e) {
    let coords = e.target.value.split(",");
    map.flyTo(coords, 15);
})

//marcador de wifinet
var WifinetIcon = L.icon({
    iconUrl: 'contenido/Imagenes/mapa/icon.png',
    iconSize: [22, 20],
    iconAnchor: [0, 0],
    popupAnchor: [-1, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

//MArcadores
L.marker([-6.6348123, -79.7875019], {icon: WifinetIcon}).addTo(map);

//agregar capa
L.geoJson(ferreñafe, {
    style:{
        color:"green",
        fillOpacity: 0.2
    }
}).addTo(map);

L.geoJson(batangrande, {
    style:{
        color:"green",
        fillOpacity: 0.2
    }
}).addTo(map);

