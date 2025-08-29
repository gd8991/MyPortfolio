// Resume download functionality
document.getElementById("resumeBtn").addEventListener("click", function (e) {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "assets/Files/Gurdeep_Resume.docx"; // Put your actual file path here
  link.download = "Gurdeep_Singh_Resume.docx";
  link.click();
});

// Hamburger menu functionality (for hamburger solution)
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".btn-nav").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Smooth scrolling for navigation links
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document
  .querySelectorAll(".fade-in, .fade-in-left, .fade-in-right, .tech-item")
  .forEach((el) => {
    observer.observe(el);
  });

// Observe social links separately for staggered animation
document.querySelectorAll(".social-links a").forEach((el) => {
  observer.observe(el);
});

// Add scroll effect to navbar
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const navbar = document.querySelector(".navbar");

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop;
});

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  const speed = scrolled * 0.5;
  parallax.style.backgroundPosition = `center ${speed}px`;
});

document.addEventListener("DOMContentLoaded", function () {
  // Typed.js animation for background "DEVELOPER"
  if (document.getElementById("typed-developer")) {
    new Typed("#typed-developer", {
      strings: ["DEVELOPER", "PROBLEM SOLVER", "THINKER", "EXPLORER"],
      typeSpeed: 50, // Speed of typing (lower = faster)
      backSpeed: 30, // Speed of backspacing
      backDelay: 2000, // Delay before backspacing
      startDelay: 500, // Delay before starting
      loop: true, // Loop the animation
      showCursor: false, // Show blinking cursor
      cursorChar: "_", // Custom cursor character
      smartBackspace: true, // Only backspace what doesn't match the previous string
    });
  }
});
