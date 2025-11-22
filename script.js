/*  ============================ Variables ============================  */
/* Button Elements Home page*/
const btnReadMore = document.getElementById("btnReadMore");
const btnLetsTalk = document.getElementById("btnLetsTalk");
const btnCloseMessageToMe = document.getElementById("btnCloseMessageToMe-modal");
const btnSendMessageToMe = document.getElementById("send-message-toMe");
const btnCelarMessageToMe = document.getElementById("clear-all-content-message");

/* Modal Elements  Home page */
const messageModal = document.getElementById("message-toMe-modal");
const modalOverlay = document.getElementById("overlayer");

/* Buttton Elements About page */



//emailjs.init("M19Ub3fyi1nfEbstB");

/*  ============================ Event Listeners ============================  */
document.addEventListener("DOMContentLoaded", () => {

    /* ===================== General JS code ===================== */
    if (typeof LoadingScreen === "function") {
        LoadingScreen();
    }
    SetActivePage();

    /* ===================== Home Page JS code ===================== */
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

    /*
    if (btnSendMessageToMe) {
        btnSendMessageToMe.addEventListener("click", () => {
            const userEmail = document.getElementById("sender-email").value;
            const message = document.getElementById("message-toMe").value;

            if (message.trim() === "") {
                alert("Message cannot be empty!");
                return;
            }

            btnSendMessageToMe.disabled = true;
            btnSendMessageToMe.innerText = "Sending...";

            emailjs.send("service_xsgot6o", "template_rdq3kxe", {
                from_email: userEmail || "No email provided",
                message: message
            })
                .then(() => {
                    alert("Message sent successfully!");
                    document.getElementById("message-toMe").value = "";
                    document.getElementById("sender-email").value = "";
                })
                .catch((error) => {
                    alert("Failed to send message: " + JSON.stringify(error));
                })
                .finally(() => {
                    btnSendMessageToMe.disabled = false;
                    btnSendMessageToMe.innerText = "Send";
                });
        });
    }
    */

    if (btnCelarMessageToMe) {
        btnCelarMessageToMe.addEventListener("click", () => {
            const inputFields = messageModal.querySelectorAll("input, textarea");
            inputFields.forEach(field => field.value = "");
        });
    }

    /* ===================== About Page JS code ===================== */
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    document.querySelector(".arrow.right").addEventListener("click", () => {
        index++;
        if (index >= slides.length) index = 0; // reset – kružno
        updateSlider();
    });

    document.querySelector(".arrow.left").addEventListener("click", () => {
        index--;
        if (index < 0) index = slides.length - 1;
        updateSlider();
    });
    
    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

});

/*  ============================ Functions ============================  */

/*General Functions*/
function LoadingScreen() {
    const loadingScreen = document.getElementById("loading-screen");
    loadingScreen.classList.remove("hidden");

    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 2000);
} 