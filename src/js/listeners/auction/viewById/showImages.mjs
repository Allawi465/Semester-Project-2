/**
 * show images with carousel if more one
 * @param {images} forEach from listing
 */

export function showImages(arg) {
  const sliderBtnLeft = document.querySelector('.carousel-control-prev');
  const sliderBtnRight = document.querySelector('.carousel-control-next');

  arg.forEach((images) => {
    const carousel = document.querySelector('.carousel-inner');

    const carouselItem = document.createElement('div');

    carouselItem.classList.add('carousel-item');

    const image = document.createElement('img');

    image.classList.add('d-block', 'w-100');

    image.src = `${images}`;

    carouselItem.append(image);

    carousel.append(carouselItem);

    const carouselImage = document.querySelector('.carousel-item');

    carouselImage.classList.add('active');
  });

  if (arg.length === 0 || arg.length === 1) {
    sliderBtnLeft.style.display = 'none';
    sliderBtnRight.style.display = 'none';
  } else {
    sliderBtnLeft.style.display = 'block';
    sliderBtnRight.style.display = 'block';
  }
}
