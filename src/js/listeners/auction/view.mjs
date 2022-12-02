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

  const sorterDate = listings.map((listing) => {
    return {
      ...listing,
      created: new Date(listing.created).toLocaleDateString('no-NO', options),
      endsAt: new Date(listing.endsAt).toLocaleDateString('no-NO', options),
    };
  });

  const filteredNoBids = sorterDate.filter(
    (listing) =>
      listing.title &&
      listing.media &&
      listing.tags &&
      listing.media &&
      listing.description &&
      listing._count.bids === 0 &&
      listing.seller.avatar
  );

  const filteredListings = sorterDate.filter(
    (listing) =>
      listing.title &&
      listing.media &&
      listing.tags &&
      listing.media &&
      listing.description &&
      listing._count.bids > 0 &&
      listing.seller.avatar
  );

  const itemAuction = filteredListings.map((seller) => ({
    name: seller.seller.name,
    avatar: seller.seller.avatar,
    created: seller.created,
    tags: seller.tags,
    media: seller.media,
    title: seller.title,
    _count: seller._count.bids,
    description: seller.description,
    endsAt: seller.endsAt,
    id: seller.id,
    lastBidder: seller.bids[seller.bids.length - 1],
  }));

  templates.templatesNoBids(filteredNoBids, containerViewLists);
  templates.renderTemplate(itemAuction, containerViewLists);

  changeModel();
}

export function changeModel() {
  let bidOnBtn = document.querySelectorAll('#bidOn');
  const token = localStorage.load('token');
  bidOnBtn.forEach((btn) => {
    if (token) {
      btn.dataset.bsTarget = '#bidModel';
    }
  });
}
