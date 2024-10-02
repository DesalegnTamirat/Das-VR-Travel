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
