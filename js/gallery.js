let slideIndex = 1;
let slideTimer;

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides fade");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto slideshow
function autoShowSlides() {
  slideIndex++;
  showSlides(slideIndex);
  slideTimer = setTimeout(autoShowSlides, 4000);
}

// Manual controls
function plusSlides(n) {
  clearTimeout(slideTimer);  // stop auto
  showSlides(slideIndex += n);
  slideTimer = setTimeout(autoShowSlides, 4000); // restart auto
}

function currentSlide(n) {
  clearTimeout(slideTimer);
  showSlides(slideIndex = n);
  slideTimer = setTimeout(autoShowSlides, 4000);
}

// Start slideshow on load
document.addEventListener("DOMContentLoaded", function () {
  showSlides(slideIndex);
  slideTimer = setTimeout(autoShowSlides, 4000);
});
