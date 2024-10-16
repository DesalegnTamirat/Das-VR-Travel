// DOM Elements
const header = document.querySelector("header");
const donateBtn = document.querySelector(".donate button");
const menuBtn = document.querySelector(".menu-nav-icon");
const closeBtn = document.querySelector(".close-nav-icon");
const navBtns = document.querySelectorAll(".main-nav a");

// Open and close the mobile menu
const openMenu = () => header.classList.add("menu-mode");
const closeMenu = () => header.classList.remove("menu-mode");

// Toggle visibility for hidden content
const toggleHiddenText = () => {
  const hidden = document.querySelector(".hidden-text");
  hidden.classList.toggle("visible");
};

// Attach event listeners to menu buttons and nav links
menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
donateBtn.addEventListener("click", toggleHiddenText);
navBtns.forEach((navBtn) => navBtn.addEventListener("click", closeMenu));

// Wait for the DOM to fully load before executing
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const leftCaret = document.querySelector(".caret-left");
  const rightCaret = document.querySelector(".caret-right");
  const dots = document.querySelectorAll(".dots div");

  let currentIndex = 0;

  // Update the testimonial and corresponding dot
  const updateTestimonial = (index) => {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("current-testimonial", i === index);
      dots[i].classList.toggle("selected", i === index);
    });
  };

  // Show the next testimonial, looping back to the start if needed
  const showNextTestimonial = () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  };

  // Show the previous testimonial, looping back to the end if needed
  const showPreviousTestimonial = () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  };

  // Attach event listeners to caret buttons
  rightCaret.addEventListener("click", showNextTestimonial);
  leftCaret.addEventListener("click", showPreviousTestimonial);

  // Attach event listeners to dots for direct navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  // Initialize by displaying the first testimonial
  updateTestimonial(currentIndex);

  // Optional: Auto-play testimonials every 5 seconds (can be removed if undesired)
  setInterval(showNextTestimonial, 5000);
});
