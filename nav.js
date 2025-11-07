document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("nav-placeholder");
    if (!navContainer) return;

    fetch("nav.html")
        .then(res => res.text())
        .then(data => {
            navContainer.innerHTML = data;

            SetActivePage();

        })
        .catch(err => console.error("Greška pri učitavanju navigacije:", err));
});

// Funkcija za aktivnu stranicu
function SetActivePage() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-item");
    const navIcons = document.querySelectorAll(".nav-icon");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        link.classList.toggle("active", href && href.includes(currentPage));
    });

    navIcons.forEach(icon => {
        const href = icon.getAttribute("href");
        icon.classList.toggle("active", href && href.includes(currentPage));
    });
}
