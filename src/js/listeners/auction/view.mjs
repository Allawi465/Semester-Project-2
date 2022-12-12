import { viewingAll } from '../../api/auction/view.mjs';
import * as localStorage from '../../storage/index.mjs';
import * as templates from '../../templates/index.mjs';
export const spinner = document.getElementById('spinner');

export const containerViewLists = document.querySelector('.renderAuction');

/**
 * Getting posts from api call
 * @param {posts} getting posts
 * @param {filteredPosts} filtering the post
 * @param {renderPostsTemplate} temples for showing the posts
 */

export async function viewListings() {
  const listings = await viewingAll();

  const options = { month: 'long', day: 'numeric' };
  const optionsWithTime = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const sorterDate = listings.map((listing) => {
    return {
      ...listing,
      created: new Date(listing.created).toLocaleDateString('no-NO', options),
      endsAt: new Date(listing.endsAt).toLocaleDateString(
        'no-NO',
        optionsWithTime
      ),
    };
  });

  const filteredNoBids = sorterDate.filter(
    (listing) =>
      listing._count.bids === 0 && listing.seller.avatar && listing.title
  );

  const filteredListings = sorterDate.filter(
    (listing) =>
      listing._count.bids > 0 && listing.seller.avatar && listing.title
  );

  console.log(filteredNoBids);
  spinner.style.display = 'none';
  templates.renderTemplate(filteredListings, containerViewLists);
}

export function changeModel() {
  const bidOnBtn = document.querySelectorAll('#bidOn');
  const token = localStorage.load('token');
  bidOnBtn.forEach((btn) => {
    if (token) {
      btn.dataset.bsTarget = '#bidModel';
    }
  });
}
