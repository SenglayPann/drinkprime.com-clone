let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function showSlide(index) {
  const carousel = document.getElementById('carousel');
  const newTransformValue = `-${index * 100}%`;
  carousel.style.transform = `translateX(${newTransformValue})`;
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

// Initialize the first slide
showSlide(currentIndex);