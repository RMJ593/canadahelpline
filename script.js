document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const acceptTerms = document.getElementById("acceptTerms");
    const enterButton = document.getElementById("enterButton");
    const termsLink = document.getElementById("termsLink");
    const termsModal = document.getElementById("termsModal");
    const closeModal = document.querySelector(".close");


    const lastAccepted = localStorage.getItem("popupLastAccepted");
    const now = new Date().getTime();
   
    const eightHours = 8 * 60 * 60 * 1000;

    if (lastAccepted && now - lastAccepted < eightHours) {
        
        window.location.href = "https://canadahelpline.ca/";
        return; 
    }

    popup.style.display = "flex";

    
    acceptTerms.addEventListener("change", function () {
        enterButton.disabled = !acceptTerms.checked;
        enterButton.classList.toggle("active", acceptTerms.checked);
    });

   
    enterButton.addEventListener("click", function () {
        localStorage.setItem("popupLastAccepted", now); 
        popup.style.display = "none";
        window.location.href = "https://canadahelpline.ca/";
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
});
