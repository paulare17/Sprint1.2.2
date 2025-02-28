import "./styles.scss";
import './style.css'

//ocultar - amagar el close button del menú
document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const closeBtn = document.getElementById("close-btn");
    const navbarNav = document.getElementById("navbarNav");

    // Quan el menú s'obre, mostra el botó de tancar
    navbarNav.addEventListener("shown.bs.collapse", function () {
        closeBtn.classList.remove("d-none");
    });

    // Quan el menú es tanca, amaga el botó de tancar
    navbarNav.addEventListener("hidden.bs.collapse", function () {
        closeBtn.classList.add("d-none");
    });

    // Fes que el botó de tancar funcioni
    closeBtn.addEventListener("click", function () {
        navbarNav.classList.remove("show"); // Tanca el menú manualment
        closeBtn.classList.add("d-none");   // Amaga el botó
    });
});