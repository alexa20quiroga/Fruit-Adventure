/* ========================= */
/* MENSAJE DE BIENVENIDA */
/* ========================= */

console.log("Sitio web del videojuego cargado correctamente");


/* ========================= */
/* EFECTO SCROLL HEADER */
/* ========================= */

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    header.classList.toggle("activo", window.scrollY > 50);

});


/* ========================= */
/* ANIMACIÓN SIMPLE */
/* ========================= */

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0px 0px 20px rgba(255, 16, 251, 0.26)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "none";

    });

});


/* ========================= */
/* BOTÓN DEMO */
/* ========================= */

const botonDemo = document.querySelector(".demo .btn");

botonDemo.addEventListener("click", function(){

    alert("La demo del videojuego se abrirá en una nueva pestaña.");

});


/* ========================= */
/* EFECTO APARICIÓN */
/* ========================= */

const secciones = document.querySelectorAll(".seccion");

window.addEventListener("scroll", mostrarSecciones);

function mostrarSecciones(){

    const trigger = window.innerHeight / 1.2;

    secciones.forEach(seccion => {

        const top = seccion.getBoundingClientRect().top;

        if(top < trigger){

            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0px)";

        }

    });

}


/* ========================= */
/* ESTILO INICIAL */
/* ========================= */

secciones.forEach(seccion => {

    seccion.style.opacity = "0";
    seccion.style.transform = "translateY(50px)";
    seccion.style.transition = "all 0.8s ease";

});


/* ========================= */
/* MENÚ RESPONSIVE SIMPLE */
/* ========================= */

const enlaces = document.querySelectorAll("nav a");

enlaces.forEach(enlace => {

    enlace.addEventListener("click", () => {

        console.log("Navegando a sección");

    });

});