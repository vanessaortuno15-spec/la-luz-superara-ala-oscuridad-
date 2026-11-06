
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const backToTop = document.getElementById("back-to-top");

// Abrir y cerrar menú
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Cerrar menú al seleccionar una sección
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Mostrar botón para volver arriba
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }
});

// Volver al inicio
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
