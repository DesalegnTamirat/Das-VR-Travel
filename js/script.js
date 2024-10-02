const header = document.querySelector("header");
const donateBtn = document.querySelector(".donate button");
const menuBtn = document.querySelector(".menu-nav-icon");
const closeBtn = document.querySelector(".close-nav-icon");
const navBtns = document.querySelectorAll(".main-nav a");


function openMenu() {
  header.classList.add("menu-mode");
}

function closeMenu() {
  header.classList.remove("menu-mode");
}

function handleClick() {
  const hidden = document.querySelector(".hidden-text");
  hidden.classList.toggle("visible");
}

menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
donateBtn.addEventListener("click", handleClick);
navBtns.forEach((navBtn) => navBtn.addEventListener("click", closeMenu));



document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  const leftCaret = document.querySelector(".caret-left");
  const rightCaret = document.querySelector(".caret-right");
  const dots = document.querySelectorAll(".dots div");

  let currentIndex = 3;

  
  const updateTestimonial = (index) => {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("current-testimonial", i === index);
      dots[i].classList.toggle("selected", i === index);
    });
  };

  // Function to show the next testimonial
  const showNextTestimonial = () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  };

  // Function to show the previous testimonial
  const showPreviousTestimonial = () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  };

  // Event listeners for the caret buttons
  rightCaret.addEventListener("click", showNextTestimonial);
  leftCaret.addEventListener("click", showPreviousTestimonial);

  // Event listeners for the dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  // Initialize by displaying the first testimonial
  updateTestimonial(currentIndex);
});
