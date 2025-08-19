// Enhanced JavaScript for BharatNetra - Pagination System

// Tool button functionality
function showPage(page) {
  // Hide all pages
  document.querySelectorAll(".tools-page").forEach((pg) => {
    pg.classList.remove("active");
  });

  // Show selected page
  document.getElementById("page" + page).classList.add("active");

  // Update active button
  document.querySelectorAll(".page-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  document
    .querySelector(".page-btn:nth-child(" + page + ")")
    .classList.add("active");
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission handling
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Add loading state
    const submitBtn = this.querySelector(".submit-btn");
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Thank you for contacting BharatNetra! Our team will respond to your message within 24 hours."
      );
      this.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  // Use a class for styling on scroll for better performance and separation of concerns.
  // A threshold of 50px makes the effect trigger sooner.
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Enhanced scroll animations with intersection observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Add staggered animation for tool cards
      if (entry.target.classList.contains("tool-card")) {
        const delay =
          Array.from(entry.target.parentElement.children).indexOf(
            entry.target
          ) * 100;
        setTimeout(() => {
          entry.target.style.animationDelay = `${delay}ms`;
        }, 100);
      }
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in, .tool-card, .team-card").forEach((el) => {
  observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const rate = scrolled * -0.1;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Enhanced loading animation
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 1s ease";

  setTimeout(() => {
    document.body.style.opacity = "1";

    // Trigger hero animations
    const titleLines = document.querySelectorAll(".title-line");
    titleLines.forEach((line, index) => {
      setTimeout(() => {
        line.style.animation = "titleSlideIn 1s ease-out forwards";
      }, index * 200);
    });

    // Trigger floating elements animation
    const floatingIcons = document.querySelectorAll(".floating-icon");
    floatingIcons.forEach((icon, index) => {
      setTimeout(() => {
        icon.style.animation = `float 6s ease-in-out infinite ${index * 0.5}s`;
      }, 1000 + index * 200);
    });
  }, 100);
});

// Tools Slider Functionality
class ToolsSlider {
  constructor() {
    this.slider = document.querySelector(".tools-slider");
    this.track = document.querySelector(".slider-track");
    this.slides = document.querySelectorAll(".slider-slide");
    this.prevBtn = document.querySelector(".prev-btn");
    this.nextBtn = document.querySelector(".next-btn");
    this.dotsContainer = document.querySelector(".slider-dots");

    this.currentSlide = 0;
    this.slideWidth = 300; // Width of each slide
    this.maxSlides = this.slides.length;

    this.init();
  }

  init() {
    this.createDots();
    this.updateSlider();
    this.bindEvents();
    this.startAutoPlay();
  }

  createDots() {
    for (let i = 0; i < this.maxSlides; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => this.goToSlide(i));
      this.dotsContainer.appendChild(dot);
    }
  }

  updateSlider() {
    const translateX = -this.currentSlide * this.slideWidth;
    this.track.style.transform = `translateX(${translateX}px)`;

    // Update dots
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentSlide);
    });

    // Update button states
    this.prevBtn.disabled = this.currentSlide === 0;
    this.nextBtn.disabled = this.currentSlide === this.maxSlides - 1;
  }

  goToSlide(index) {
    this.currentSlide = Math.max(0, Math.min(index, this.maxSlides - 1));
    this.updateSlider();
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides - 1) {
      this.currentSlide++;
      this.updateSlider();
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateSlider();
    }
  }

  bindEvents() {
    this.nextBtn.addEventListener("click", () => this.nextSlide());
    this.prevBtn.addEventListener("click", () => this.prevSlide());

    // Touch/swipe support
    let startX = 0;
    let endX = 0;

    this.slider.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    this.slider.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      this.handleSwipe();
    });

    // Keyboard navigation
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });
  }

  handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
    }
  }

  startAutoPlay() {
    setInterval(() => {
      if (this.currentSlide < this.maxSlides - 1) {
        this.nextSlide();
      } else {
        this.goToSlide(0);
      }
    }, 5000); // Auto-advance every 5 seconds
  }
}

// Initialize slider when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  new ToolsSlider();
});

// Enhanced CTA button functionality
document.querySelectorAll(".cta-btn").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.classList.contains("primary")) {
      // Scroll to tools section
      document.querySelector("#tools").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (this.classList.contains("secondary")) {
      // Scroll to about section
      document.querySelector("#about").scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add typing effect for mission text
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = "";

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when mission section is visible
const missionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const missionText = entry.target;
        const originalText = missionText.textContent;

        // Add typing effect
        setTimeout(() => {
          typeWriter(missionText, originalText, 50);
        }, 500);

        missionObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observe mission text
const missionText = document.querySelector(".mission-text");
if (missionText) {
  missionObserver.observe(missionText);
}

// Add particle effect to hero section
function createParticle() {
  const particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.width = "2px";
  particle.style.height = "2px";
  particle.style.background = "rgba(102, 126, 234, 0.6)";
  particle.style.borderRadius = "50%";
  particle.style.pointerEvents = "none";

  const hero = document.querySelector(".hero");
  if (hero) {
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `particleFloat ${
      3 + Math.random() * 4
    }s linear infinite`;

    hero.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 7000);
  }
}

// Create particles periodically
setInterval(createParticle, 2000);

// Add smooth reveal animation for sections
function revealOnScroll() {
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    if (scrollTop + windowHeight > sectionTop + sectionHeight * 0.3) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }
  });
}

// Initialize section reveal
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });

  // Trigger first section reveal
  setTimeout(() => {
    document.querySelector(".hero").style.opacity = "1";
    document.querySelector(".hero").style.transform = "translateY(0)";
  }, 100);
});

// Add scroll event listener for section reveal
window.addEventListener("scroll", revealOnScroll);

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

  button.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Add ripple effect to all buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", createRipple);
});

// Add CSS for ripple effect
const rippleStyle = document.createElement("style");
rippleStyle.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);
