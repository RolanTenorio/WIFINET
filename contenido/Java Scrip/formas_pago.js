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

function desplazar() {
    document.getElementById('Pagos').scrollIntoView({ behavior: 'smooth' });
}

//

var bn = document.querySelector('.bn')
var card_container = document.querySelector('.card_container')
var close_btn = document.querySelector('.close_btn')

bn.addEventListener('click',function(){
    card_container.classList.add('active');
})

close_btn.addEventListener('click',function(){
    card_container.classList.remove('active');
})
//
var bbva=document.querySelector('.bbva')
var card_container2 = document.querySelector('.card_container2')
var close_btn2 = document.querySelector('.close_btn2')

bbva.addEventListener('click',function(){
    card_container2.classList.add('active');
})
close_btn2.addEventListener('click',function(){
    card_container2.classList.remove('active');
})
//
var bcp=document.querySelector('.bcp')
var card_container3 = document.querySelector('.card_container3')
var close_btn3 = document.querySelector('.close_btn3')

bcp.addEventListener('click',function(){
    card_container3.classList.add('active');
})
close_btn3.addEventListener('click',function(){
    card_container3.classList.remove('active');
})

//
var yape=document.querySelector('.yape')
var card_container4 = document.querySelector('.card_container4')
var close_btn4 = document.querySelector('.close_btn4')

yape.addEventListener('click',function(){
    card_container4.classList.add('active');
})
close_btn4.addEventListener('click',function(){
    card_container4.classList.remove('active');
})

