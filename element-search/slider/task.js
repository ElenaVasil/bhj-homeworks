const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const arr = Array.from(document.querySelectorAll('.slider__item'));

prev.onclick = () => {
  let currentSlider = arr.findIndex(i=> i === document.querySelector('.slider__item_active'));
  currentSlider --;
  if (currentSlider < 0) {
    arr[currentSlider+1].classList.remove('slider__item_active');
    currentSlider = arr.length-1;
    arr[currentSlider].classList.add('slider__item_active');
  } else {
    arr[currentSlider+1].classList.remove('slider__item_active');
    arr[currentSlider].classList.add('slider__item_active');
  }
}
next.onclick = () => {
  let currentSlider = arr.findIndex(i=> i === document.querySelector('.slider__item_active'));
  currentSlider ++;
  if (currentSlider === arr.length) {
    arr[currentSlider-1].classList.remove('slider__item_active');
    currentSlider = 0;
    arr[currentSlider].classList.add('slider__item_active');
  } else {
    arr[currentSlider-1].classList.remove('slider__item_active');
    arr[currentSlider].classList.add('slider__item_active');
  }
}