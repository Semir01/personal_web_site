/*  ============================ Variables ============================  */
const btnReadMore = document.getElementById("btnReadMore");
const btnLetsTalk = document.getElementById("btnLetsTalk");




/*  ============================ Event Listeners ============================  */
document.addEventListener("DOMContentLoaded", () => {
    if (typeof LoadingScreen === "function") {
        LoadingScreen();
    }

    SetActivePage();

    if (btnReadMore) {
        btnReadMore.addEventListener("click", () => {
            window.location.href = "about.html";
        });
    }

    if( btnLetsTalk ) {
        btnLetsTalk.addEventListener("click", () => {
            const messageModal = document.getElementById("message-toMe-modal");
            const modalOverlay = document.getElementById("overlayer");

            if (messageModal && modalOverlay) {
                messageModal.style.display = "flex";
                modalOverlay.style.display = "flex";    
            }
        });
    }
});
/*  ============================ Functions ============================  */

function LoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.remove("hidden");

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 2000);
}

function SetActivePage() {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-item");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (href && href.includes(currentPage)) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
