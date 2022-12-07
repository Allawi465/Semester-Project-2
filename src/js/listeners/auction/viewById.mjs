import { viewById } from '../../api/auction/viewById.mjs';
import * as templates from '../../templates/index.mjs';
import { changeModel } from './view.mjs';
const bidInput = document.getElementById('bidInput');

export const container = document.querySelector('.singleItem');

/**
 * deleting a post by id
 * @param {containerForPosts} using the card posts to get the id from
 * @param {deleting} sending to api call
 */

export async function viewId() {
  const { media, tags, bids, ...item } = await viewById();

  templates.renderPostById(item, container);

  const created = item.created;

  const endsAt = item.endsAt;

  localTime(created, endsAt);

  showImages(media);

  showTag(tags);

  lastBidder(bids);

  changeModel();

  console.log(bids);
}

function showTag(arg) {
  arg.forEach((tag) => {
    const tagsContainer = document.querySelector('.tags-container');

    const tagItem = document.createElement('p');

    tagItem.classList.add('badge', 'bg-dark', 'tags', 'ms-2');

    tagItem.innerHTML = tag;

    tagsContainer.append(tagItem);
  });
}

function showImages(arg) {
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

function localTime(arg, arg2) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  const localTimeEndsAt = new Date(arg).toLocaleDateString('no-NO', options);

  const localTimeCreated = new Date(arg2).toLocaleDateString('no-NO', options);

  const createdTime = document.querySelector('.createdTime');

  const endTime = document.querySelector('.endTime');

  createdTime.innerHTML = localTimeCreated;

  endTime.innerHTML = `Ends ${localTimeEndsAt}`;
}

function lastBidder(arg) {
  const lastBidder = document.querySelector('.bidList');
  arg.reverse();
  if (arg.length > 0) {
    lastBidder.innerHTML = `<p class="text-center fw-bolder mt-4">Highest bidder: ${arg[0].bidderName}<span class="fw-normal"> have bid:</span><span class="fw-normal fw-bolder"> ${arg[0].amount}</span></p>`;
    bidInput.setAttribute('min', arg[0].amount + 1);
  } else {
    lastBidder.innerHTML =
      '<p class="badge rounded-pill text-bg-success fs-6 fw-semibold mt-1">Be the first to make a bid</p>';
    bidInput.setAttribute('min', 1);
  }
}
