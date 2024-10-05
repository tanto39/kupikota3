const leftButton = document.querySelector(".carousel-left");
const rightButton = document.querySelector(".carousel-right");
const leftButtonSmall = document.querySelector(".carousel-left-small");
const rightButtonSmall = document.querySelector(".carousel-right-small");
const slides = document.querySelector(".image-container");

function getTranslate() {
  return window.getComputedStyle(slides).getPropertyValue("transform").match(/(-?[0-9\.]+)/g)[4];
}

function prevSlide() {
  const translateVal = getTranslate();
  if (translateVal == 0) return;

  slides.style.animation = "none";
  slides.offsetHeight; 
  slides.style.animation = `slideAnimationPrev 8s infinite ease-in-out`;
}

function nextSlide() {
  const translateVal = getTranslate();
  if (translateVal != 0) return;

  slides.style.animation = "none";
  slides.offsetHeight; 
  slides.style.animation = `slideAnimationNext 8s infinite ease-in-out`;
}

rightButton.addEventListener("click", () => {
  nextSlide();
});

rightButtonSmall.addEventListener("click", () => {
  nextSlide();
});

leftButton.addEventListener("click", () => {
  prevSlide();
});

leftButtonSmall.addEventListener("click", () => {
  prevSlide();
});