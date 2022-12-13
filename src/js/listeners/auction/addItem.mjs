import { creatingListing } from '../../api/auction/addItem.mjs';

/**
 * form to register
 * @param {user} form to register new users
 * @param {register} sending the form to api call
 */

const closeModel = document.querySelectorAll('.close');
const addMoreImages = document.getElementById('addMoreImage');
const galleryNumber = document.querySelector('.gallery');
const mediaGallery = document.getElementById('floatingImage');
const cloneGallery = document.querySelector('.cloneImg');
let urls = [];
let counter = 0;

export function addItemToAuction() {
  const form = document.getElementById('itemToAuction');

  addMoreImages.addEventListener('click', addMoreImage);

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const item = Object.fromEntries(formData.entries());
      urls.push(item.media);
      item.media = urls;
      let newTags = item.tags.replace(/\s+/g, '').split(',');
      item.tags = newTags;
      galleryNumber.innerHTML = '';
      cloneGallery.innerHTML = '';
      creatingListing(item);
      form.reset();
      urls = [];
    });
  }
}

function addMoreImage() {
  if (confirmUrl(mediaGallery.value)) {
    counter++;

    galleryNumber.innerHTML = counter;

    urls.push(mediaGallery.value);

    mediaGallery.value = '';

    cloneGallery.innerHTML = '';

    if (counter === 5) {
      addMoreImages.style.display = 'none';
      galleryNumber.innerHTML = 'Max (6)';
    }

    galleryImages(urls);
  }
}

function galleryImages(arg) {
  for (let i = 0; i < arg.length; i++) {
    cloneGallery.innerHTML += `<div class="imgContainer"><img class="imgGallery mx-2 mb-2" type="button" data-item-index="${[
      i,
    ]}" src="${
      arg[i]
    }" alt="preview image" width="65 height="65"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash mb-2" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg></div>`;

    const cloneImg = document.querySelectorAll('.imgContainer');

    cloneImg.forEach((imagesUrl) => {
      imagesUrl.onclick = function () {
        const itemIndex = this.getAttribute('data-item-index');
        arg.splice(itemIndex, 1);
        counter--;
        galleryNumber.innerHTML = counter;
        imagesUrl.remove();
        if (counter === 5) {
          galleryNumber.innerHTML = '';
        }
        if (counter === 0) {
          galleryNumber.innerHTML = '';
        } else if (counter < 5) {
          addMoreImages.style.display = 'block';
        }
      };
    });
  }
}

closeModel.forEach((close) => [close.addEventListener('click', resetGallery)]);

function resetGallery() {
  urls = [];
  counter = 0;
  galleryNumber.innerHTML = '';
  cloneGallery.innerHTML = '';
  addMoreImages.style.display = 'block';
}

function confirmUrl(mediaGallery) {
  const regExEValue =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
  const confirmingMatches = regExEValue.test(mediaGallery);
  return confirmingMatches;
}
