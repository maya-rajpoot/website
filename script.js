
// Slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let slideIndex = 0;

function moveSlide(direction) {
  slideIndex += direction;
  const slides = document.querySelectorAll('.slide');
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  const translateValue = -slideIndex * 100;
  if (translateValue == 0) {
    slider.style.transform = `translateX(${translateValue}%)`;
    slider.style.transition = "none";
  } else {
    slider.style.transform = `translateX(${translateValue}%)`;
    slider.style.transition = "5s ease-in-out";
  }
}

prevBtn.addEventListener('click', () => moveSlide(-1));
nextBtn.addEventListener('click', () => moveSlide(1));

setInterval(() => moveSlide(1), 5000);

// Status Bar

const statusbar = document.querySelectorAll(".status-bar");

statusbar.forEach(bar => {
  const percent = bar.dataset.percent;
  bar.style.width = percent + '%';
});

// Second Slider
let SlideIndex = 1;
showSlides(SlideIndex);

function plusSlides(n) {
  showSlides(SlideIndex += n);
}

function currentSlide(n) {
  showSlides(SlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {SlideIndex = 1}    
  if (n < 1) {SlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[SlideIndex-1].style.display = "block";
  dots[SlideIndex-1].className += " active";
}