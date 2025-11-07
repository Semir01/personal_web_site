/*  ============================ Variables ============================  */
/* Button Elements */
const btnReadMore = document.getElementById("btnReadMore");
const btnLetsTalk = document.getElementById("btnLetsTalk");
const btnCloseMessageToMe = document.getElementById("btnCloseMessageToMe-modal");

/* Modal Elements */
const messageModal = document.getElementById("message-toMe-modal");
const modalOverlay = document.getElementById("overlayer");

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

    if (btnLetsTalk) {
        btnLetsTalk.addEventListener("click", () => {


            if (messageModal && modalOverlay) {
                messageModal.style.display = "flex";
                modalOverlay.style.display = "flex";
            }
        });
    }

    if (btnCloseMessageToMe) {
        btnCloseMessageToMe.addEventListener("click", () => {
            messageModal.style.display = "none";
            modalOverlay.style.display = "none";
        })
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
    const navIcon = document.querySelectorAll(".nav-icon");

    if (navLinks) {
        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            if (href && href.includes(currentPage)) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    if(navIcon){
         navIcon.forEach(link => {
            const href = link.getAttribute("href");
            if (href && href.includes(currentPage)) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

}
