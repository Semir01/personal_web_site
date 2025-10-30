/*  ============================ Event Listeners ============================  */
document.addEventListener("DOMContentLoaded", () => {
   LoadingScreen();

});


/*  ============================ Functions ============================  */

function LoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.remove("hidden");

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 2000);
}