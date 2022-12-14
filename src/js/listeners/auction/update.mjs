import { containerViewLists } from './view.mjs';
import { listingsById } from '../../api/auction/viewById.mjs';
import { update } from '../../api/auction/update.mjs';

/**
 * updating a listing by id
 * @param {containerViewLists} using the card listing to get the id from
 * @param {listingsById} getting the content value title, tags and description
 * @param {formData} making new form to update the post by id
 */

export function editAListings() {
  containerViewLists.addEventListener('click', async (e) => {
    const editBtn = e.target.id === 'editPost';
    let id = e.target.dataset.id;
    const form = document.querySelector('#UpdateListing');

    if (editBtn) {
      if (form) {
        const { tags, ...listing } = await listingsById(id);
        form.title.value = listing.title;
        form.tags.value = tags;
        form.description.value = listing.description;
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          const form = event.target;
          const formData = new FormData(form);
          const listing = Object.fromEntries(formData.entries());
          let newTags = listing.tags.replace(/\s+/g, '').split(',');
          listing.tags = newTags;
          listing.id = id;
          update(listing);
        });
      }
    }
  });
}
