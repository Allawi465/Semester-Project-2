import { creatingListing } from '../../api/auction/addItem.mjs';
import { confirmUrl } from '../helpers/regEx.mjs';
const closeModel = document.querySelectorAll('.close');
const addMoreImages = document.getElementById('addMoreImage');
const galleryNumber = document.querySelector('.gallery');
const mediaGallery = document.getElementById('floatingImage');
const cloneGallery = document.querySelector('.cloneImg');
// empty url array
let urls = [];
// counter to count urls gallery
let counter = 0;

/**
 * Creating a listing with a form
 * @param {formData} using new FormData to get all inputs value
 * @param {creatingListing} sending the form to the api cal
 */

export function addItemToAuction() {
  const form = document.getElementById('itemToAuction');

  // add images to gallery button
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

/**
 * add images to gallery
 * @param {confirmUrl} if input value is a url
 * @param {counter} count images url when click
 * @param {urls} push mediaGallery value to urls array
 * @param {galleryImages} display clone images when added
 */

function addMoreImage() {
  if (confirmUrl(mediaGallery.value)) {
    counter++;

    galleryNumber.innerHTML = counter;

    urls.push(mediaGallery.value);

    mediaGallery.value = '';

    cloneGallery.innerHTML = '';

    if (counter === 5) {
      addMoreImages.style.display = 'none';
      galleryNumber.innerHTML = 'max (6)';
    }

    galleryImages(urls);
  }
}

/**
 * display gallery and remove images onclick
 * @param {cloneImg} display foreach images when added
 * @param {counter} count down images url when removing it
 * @param {cloneImg} clone images onclick remove
 */

export function galleryImages(arg) {
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

/**
 * close model addEventListener
 * @param {resetGallery} reset gallery array
 */

closeModel.forEach((close) => [close.addEventListener('click', resetGallery)]);

/**
 * reset gallery array and counter
 * @param {urls} reset urls array
 * @param {counter} reset counter to 0
 * @param {galleryNumber} reset value to empty string
 * @param {cloneGallery} reset value to empty string
 * @param {addMoreImages} show the add more images button
 */

function resetGallery() {
  urls = [];
  counter = 0;
  galleryNumber.innerHTML = '';
  cloneGallery.innerHTML = '';
  addMoreImages.style.display = 'block';
}
