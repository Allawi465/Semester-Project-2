import { containerViewLists } from './view.mjs';
import { deleting } from '../../api/auction/delete.mjs';

/**
 * deleting a post by id
 * @param {containerForPosts} using the card posts to get the id from
 * @param {deleting} sending to api call
 */

export function deleteAListing() {
  containerViewLists.addEventListener('click', () => {
    const deleteBtn = e.target.id === 'deletePost';
    let id = e.target.dataset.id;
    const deleteSureBtn = document.querySelector('.deleteButton');
    if (deleteBtn) {
      deleteSureBtn.addEventListener('click', () => {
        deleting(id);
      });
    }
  });
}
