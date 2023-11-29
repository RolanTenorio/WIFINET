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