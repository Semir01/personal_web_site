/*  ============================ Event Listeners ============================  */
document.addEventListener("DOMContentLoaded", () => {
    LoadingScreen();
    SetActivePage();
});


/*  ============================ Functions ============================  */

function LoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.remove("hidden");

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 2000);
}

function SetActivePage(){
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-item");

    navLinks.forEach(link=>{
        if(link.getAttribute("href") === currentPage){
            link.classList.add("active");
        }
    })
}