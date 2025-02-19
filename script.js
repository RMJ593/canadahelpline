document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const acceptTerms = document.getElementById("acceptTerms");
    const enterButton = document.getElementById("enterButton");
    const termsLink = document.getElementById("termsLink");
    const termsModal = document.getElementById("termsModal");
    const closeModal = document.querySelector(".close");

    // Check if popup was shown in the last 8 hours
    const lastShown = localStorage.getItem("popupLastShown");
    const now = new Date().getTime();
    const eightHours = 8 * 60 * 60 * 1000; // 8 hours in milliseconds

    if (!lastShown || now - lastShown > eightHours) {
        popup.style.display = "flex"; // Show popup
        localStorage.setItem("popupLastShown", now); // Update time in localStorage
    } else {
        popup.style.display = "none"; // Hide popup
    }

    // Enable the button when checkbox is checked
    acceptTerms.addEventListener("change", function () {
        if (acceptTerms.checked) {
            enterButton.disabled = false;
            enterButton.classList.add("active");
        } else {
            enterButton.disabled = true;
            enterButton.classList.remove("active");
        }
    });

    // Show modal when terms link is clicked
    termsLink.addEventListener("click", function (event) {
        event.preventDefault();
        termsModal.style.display = "flex";
    });

    // Close modal when close button is clicked
    closeModal.addEventListener("click", function () {
        termsModal.style.display = "none";
    });

    // Close modal when clicking outside the content
    window.addEventListener("click", function (event) {
        if (event.target === termsModal) {
            termsModal.style.display = "none";
        }
    });

    // Close popup when Enter button is clicked
    enterButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

