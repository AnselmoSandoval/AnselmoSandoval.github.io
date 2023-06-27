// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    var currentSlide = 0;
    var slides = document.querySelectorAll("#TESDA .slideshow img");
    var prevArrow = document.querySelector("#TESDA .slideshow .arrow.prev");
    var nextArrow = document.querySelector("#TESDA .slideshow .arrow.next");
  
    function showSlide(slideIndex) {
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      } else if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex].style.display = "block";
      currentSlide = slideIndex;
    }
  
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    prevArrow.addEventListener("click", prevSlide);
    nextArrow.addEventListener("click", nextSlide);
  
    showSlide(currentSlide);
  });

  
