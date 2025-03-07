import "./styles.scss";
import "./style.css";

//ocultar - amagar el close button del menú
document.addEventListener("DOMContentLoaded", function () {

  const navbarNav = document.getElementById("navbarNav");
  const closeBtn = document.getElementById("close-btn");

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
    const collapse = bootstrap.Collapse.getInstance(navbarNav) || new bootstrap.Collapse(navbarNav);
    collapse.hide(); // Tanca el menú correctament
  });
});

//Carregar els diferents arxius HTML

document.addEventListener("DOMContentLoaded", () => {
    fetch("/navbar.html")
      .then((response) => {
        if (!response.ok) throw new Error("No es pot carregar navbar.html");
        return response.text();
      })
      .then((data) => {
        document.getElementById("navbar-bookmark").innerHTML = data;
      })
      .catch((error) => {
        document.getElementById("navbar-bookmark").innerHTML = "Error: " + error.message;
        console.error("Error carregant navbar:", error);
      });
  
    fetch("/section1.html")
      .then((response) => {
        if (!response.ok) throw new Error("No es pot carregar section1.html");
        return response.text();
      })
      .then((data) => {
        document.getElementById("section-principal").innerHTML = data;
      })
      .catch((error) => {
        document.getElementById("section-principal").innerHTML = "Error: " + error.message;
        console.error("Error carregant section1:", error);
      });
  
    fetch("/section2-tabs.html")
      .then((response) => {
        if (!response.ok) throw new Error("No es pot carregar section2-tabs.html");
        return response.text();
      })
      .then((data) => {
        document.getElementById("section-tabs").innerHTML = data;
      })
      .catch((error) => {
        document.getElementById("section-tabs").innerHTML = "Error: " + error.message;
        console.error("Error carregant section2-tabs:", error);
      });
  
    fetch("/section3-down.html")
      .then((response) => {
        if (!response.ok) throw new Error("No es pot carregar section3-down.html");
        return response.text();
      })
      .then((data) => {
        document.getElementById("section-down").innerHTML = data;
      })
      .catch((error) => {
        document.getElementById("section-down").innerHTML = "Error: " + error.message;
        console.error("Error carregant section3-down:", error);
      });

      fetch("/section4-faqs.html")
      .then((response) => {
        if (!response.ok) throw new Error("No es pot carregar section4-faqs.html");
        return response.text();
      })
      .then((data) => {
        document.getElementById("section-faqs").innerHTML = data;
      })
      .catch((error) => {
        document.getElementById("section-faqs").innerHTML = "Error: " + error.message;
        console.error("Error carregant section4-faqs:", error);
      });

      fetch("/footer.html")
      .then((response) => {
        if (!response.ok) throw new Error("No es pot carregar footer-bookmark.html");
        return response.text();
      })
      .then((data) => {
        document.getElementById("footer-bookmark").innerHTML = data;
      })
      .catch((error) => {
        document.getElementById("footer-bookmark").innerHTML = "Error: " + error.message;
        console.error("Error carregant footer-bookmark:", error);
      });
  });