document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const formStatus = document.getElementById("formStatus");
  formStatus.textContent = "Thank you! Your message has been sent.";
  formStatus.style.color = "#f39c12";
  this.reset();
});

// Gallery filtering
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");

    // Optional: Highlight the active button
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    document.querySelectorAll(".gallery-item").forEach(item => {
      const itemCategory = item.getAttribute("data-category");
      if (category === "all" || itemCategory === category) {
        item.style.display = "block"; // or "flex"/"inline-block" depending on layout
      } else {
        item.style.display = "none";
      }
    });
  });
});

