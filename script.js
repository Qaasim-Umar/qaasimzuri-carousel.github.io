let carosel = document.querySelector(".carosel-container");

let next = document.querySelector(".arrow-next");
let prev = document.querySelector(".arrow-prev");

let slides = document.querySelectorAll(".carosel-items");
let totalSlides = slides.length;

let slidePostion = 0;

next.addEventListener("click", function () {
  nextBtn();
});
prev.addEventListener("click", function () {
  prevBtn();
});

function updateSlidesPosition() {
  for (let slide of slides) {
    slide.classList.remove("carosel-items--active");
    slide.classList.add("carosel-items--hidden");
  }
  slides[slidePostion].classList.add("carosel-items--active");
}

function nextBtn() {
  if (slidePostion == totalSlides - 1) {
    slidePostion = 0;
  } else {
    slidePostion++;
  }

  updateSlidesPosition();
}

function prevBtn() {
  if (slidePostion == 0) {
    slidePostion = totalSlides - 1;
  } else {
    slidePostion--;
  }
  updateSlidesPosition();
}
