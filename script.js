const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

function maxImage() {
const sliderValue = sliderInput.value;
  sliderImage.style.width = `${sliderValue * 3}px`;
  sliderImage.style.height = `${sliderValue * 3}px`;
}


const debouncedMaxImage = debounce(maxImage, 100);

sliderInput.addEventListener('input', debouncedMaxImage);