document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");
  const form = document.querySelector(".contact-form form");
  const inputs = form.querySelectorAll("input, textarea");
  const submitButton = form.querySelector(".btn");
  

  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      productCards.forEach((item) => {
        item.classList.remove("active");
        item.querySelector(".product-description").style.display = "none";
      });

      this.classList.add("active");
      this.querySelector(".product-description").style.display = "block";
    });
    
  });
  
inputs.forEach(input => {
        input.addEventListener("input", function () {
            if (this.value.trim() === "") {
                this.style.borderColor = "red";
            } else {
                this.style.borderColor = "#ccc";
            }
        });
    });

    submitButton.addEventListener("mouseenter", function () {
        this.style.backgroundColor = "#4F959D";
        this.style.color = "white";
    });

    submitButton.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "";
        this.style.color = "";
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        submitButton.textContent = "Sending...";
        submitButton.disabled = true;

        setTimeout(() => {
            alert("Form submitted successfully!");
            submitButton.textContent = "Submit";
            submitButton.disabled = false;
            form.reset();
        }, 2000); 
    });
});
    

