import { viewingAll } from '../../api/auction/view.mjs';
import * as localStorage from '../../storage/index.mjs';
import * as templates from '../../templates/index.mjs';

export const containerViewLists = document.querySelector('.renderAuction');

/**
 * Getting posts from api call
 * @param {posts} getting posts
 * @param {filteredPosts} filtering the post
 * @param {renderPostsTemplate} temples for showing the posts
 */

export async function viewListings() {
  const listings = await viewingAll();

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
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

  const itemAuction = filteredListings.map((seller) => ({
    name: seller.seller.name,
    avatar: seller.seller.avatar,
    created: seller.created,
    tags: seller.tags,
    media: seller.media,
    title: seller.title,
    _count: seller._count.bids,
    endsAt: seller.endsAt,
    id: seller.id,
    lastBidder: seller.bids.reverse(),
  }));

  // templates.templatesNoBids(filteredNoBids, containerViewLists);
  console.log(filteredNoBids);
  templates.renderTemplate(itemAuction, containerViewLists);
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
