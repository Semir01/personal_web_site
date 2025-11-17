/*  ============================ Variables ============================  */
/* Button Elements */
const btnReadMore = document.getElementById("btnReadMore");
const btnLetsTalk = document.getElementById("btnLetsTalk");
const btnCloseMessageToMe = document.getElementById("btnCloseMessageToMe-modal");
const btnSendMessageToMe = document.getElementById("send-message-toMe");
const btnCelarMessageToMe = document.getElementById("clear-all-content-message");

/* Modal Elements */
const messageModal = document.getElementById("message-toMe-modal");
const modalOverlay = document.getElementById("overlayer");


emailjs.init("M19Ub3fyi1nfEbstB");


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

    if (btnCelarMessageToMe) {
        btnCelarMessageToMe.addEventListener("click", () => {
            const inputFields = messageModal.querySelectorAll("input, textarea");
            inputFields.forEach(field => field.value = "");
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

    if (navIcon) {
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
