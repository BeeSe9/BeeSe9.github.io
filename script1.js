const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slide = document.querySelector('.carousel-slide');

let counter = 0;
const size = slide.children[0].clientWidth;

nextBtn.addEventListener('click', () => {
  if (counter >= slide.children.length - 1) return;
  counter++;
  slide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  counter--;
  slide.style.transform = `translateX(${-size * counter}px)`;
});