 // Función para establecer el desplazamiento en la parte superior
function scrollToTop() {
    window.scrollTo(0, 0);
}
// Llama a la función cuando la página se carga
window.onload = scrollToTop;
//BOTONES
function desplazar() {
    document.getElementById('Planes').scrollIntoView({ behavior: 'smooth' });
}
function desplazar2() {
    document.getElementById('QFA').scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function() {
    // Agrega la clase 'appear' al contenido después de un tiempo (ajusta según sea necesario)
    setTimeout(function() {
        document.getElementById("content").classList.add("appear");
    }, 500); // 500 milisegundos (0.5 segundos) es un ejemplo, ajusta según sea necesario
});


//ACORDION

const accordion = document.querySelectorAll(".accordion"),
accordionToggle = document.querySelectorAll(".accordion__header"),
accordionContent = document.querySelectorAll(".accordion__content"),
accordionIcon = document.querySelectorAll("#accordion-icon");

for (let i = 0; i < accordionToggle.length; i++) {
accordionToggle[i].addEventListener("click", () => {
    if (
    parseInt(accordionContent[i].style.height) !=
    accordionContent[i].scrollHeight
    ) {
    accordionContent[i].style.height =
        accordionContent[i].scrollHeight + "px";
    accordionIcon[i].classList.replace("ri-add-line", "ri-subtract-fill");
    } else {
    accordionContent[i].style.height = "0px";
    accordionIcon[i].classList.replace("ri-subtract-fill", "ri-add-line");
    }

    for (let j = 0; j < accordionContent.length; j++) {
    if (j !== i) {
        accordionContent[j].style.height = "0px";
        accordionIcon[j].classList.replace("ri-subtract-fill", "ri-add-line");
    }
    }
});
}

//NAVAR
window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})

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