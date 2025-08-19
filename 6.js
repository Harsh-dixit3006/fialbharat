document.addEventListener("DOMContentLoaded", function () {
  // Add a class to the body to trigger the CSS load-in animations
  document.body.classList.add("loaded");

  const loginForm = document.getElementById("auth-form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const submitBtn = this.querySelector(".submit-btn");
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Logging In...";
      submitBtn.disabled = true;

      // Simulate a network request
      setTimeout(() => {
        // You can add your actual login logic here
        // For now, we'll just show an alert
        alert("Login successful! Redirecting...");

        // Reset form
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

        // Redirect to the main page (optional)
        // window.location.href = '1.html';
      }, 1500);
    });
  }

  // Add ripple effect to buttons
  function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement("span");
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.classList.add("ripple");

    // Check if a ripple is already there and remove it
    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", createRipple);
  });
});
