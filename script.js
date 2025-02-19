document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const acceptTerms = document.getElementById("acceptTerms");
    const enterButton = document.getElementById("enterButton");
    const termsLink = document.getElementById("termsLink");
    const termsModal = document.getElementById("termsModal");
    const closeModal = document.querySelector(".close");

    
    const lastShown = localStorage.getItem("popupLastShown");
    const now = new Date().getTime();
    const eightHours = 8 * 60 * 60 * 1000; 

    if (!lastShown || now - lastShown > eightHours) {
        popup.style.display = "flex"; 
        localStorage.setItem("popupLastShown", now); 
    } else {
        popup.style.display = "none"; 
    }

    
    acceptTerms.addEventListener("change", function () {
        if (acceptTerms.checked) {
            enterButton.disabled = false;
            enterButton.classList.add("active");
        } else {
            enterButton.disabled = true;
            enterButton.classList.remove("active");
        }
    });

    
    termsLink.addEventListener("click", function (event) {
        event.preventDefault();
        termsModal.style.display = "flex";
    });

   
    closeModal.addEventListener("click", function () {
        termsModal.style.display = "none";
    });

   
    window.addEventListener("click", function (event) {
        if (event.target === termsModal) {
            termsModal.style.display = "none";
        }
    });

    enterButton.addEventListener("click", function () {
        popup.style.display = "none";
    });
});

