const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burger.classList.toggle("toggle");
});
const kids_sec= document.querySelector(".button-learn");
const adult_sec= document.querySelector(".button-learn2");

kids_sec.addEventListener("click", () => {
window.location.href = "kids-sec.html";
});
adult_sec.addEventListener("click", () => {
  window.location.href = "adult-sec.html";
  });
  