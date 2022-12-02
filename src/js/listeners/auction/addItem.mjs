/**
 * form to register
 * @param {user} form to register new users
 * @param {register} sending the form to api call
 */

let urls = [];
let counter = 0;
const galleryNumber = document.querySelector('.gallery');

export function addItemToAuction() {
  const form = document.getElementById('itemToAuction');
  const addMoreImages = document.getElementById('addMoreImage');

  addMoreImages.addEventListener('click', addMoreImage);

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const item = Object.fromEntries(formData.entries());
      urls.push(item.media);
      item.media = urls;
      galleryNumber.innerHTML = '';
      console.log(item);
      form.reset();
      urls = [];
    });
  }
}

function addMoreImage() {
  const mediaGallery = document.getElementById('floatingImage');

  counter++;

  console.log(counter);

  urls.push(mediaGallery.value);

  mediaGallery.value = '';
  galleryNumber.innerHTML = counter;
}
