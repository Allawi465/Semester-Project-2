import { viewingAll } from '../../api/auction/view.mjs';
import * as templates from '../../templates/index.mjs';
import { options, optionsWithTime } from './viewById.mjs';
import { visitProfilesRemoveModel } from '../profiles/buttonModel.mjs';
import { containerViewLists } from './view.mjs';

const sorterDiv = document.getElementById('sortDiv');
const withNoBidsBtn = document.getElementById('withNoBids');
const withBidsBtn = document.getElementById('withBids');

/**
 * sorting listings from api call
 * @param {posts} getting posts
 * @param {filteredWithBids} filtering listings with no bids
 * @param {filteredWithBids} filtering listings with bids
 */

export async function sorterViewListings() {
  withNoBidsBtn.disabled = true;
  sorterDiv.addEventListener('click', async (e) => {
    const withNoBids = e.target.id === 'withNoBids';
    const withBids = e.target.id === 'withBids';
    const listings = await viewingAll();

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
        listing._count.bids === 0 &&
        listing.seller.avatar &&
        listing.title &&
        listing.description &&
        listing.media
    );

    const filteredWithBids = sorterDate.filter(
      (listing) =>
        listing._count.bids > 0 &&
        listing.seller.avatar &&
        listing.title &&
        listing.description &&
        listing.media
    );

    if (withBids) {
      containerViewLists.innerHTML = '';
      templates.renderTemplate(filteredWithBids, containerViewLists);
      withBidsBtn.disabled = true;
      withNoBidsBtn.disabled = false;
      withBidsBtn.className = 'btn btn-primary mx-1 my-1';
      withNoBidsBtn.className = 'btn btn-outline-dark btn-sm mx-1 my-1';
    }
    if (withNoBids) {
      containerViewLists.innerHTML = '';
      templates.renderTemplate(filteredNoBids, containerViewLists);
      withBidsBtn.disabled = false;
      withNoBidsBtn.disabled = true;
      withBidsBtn.className = 'btn btn-outline-dark btn-sm mx-1 my-1';
      withNoBidsBtn.className = 'btn btn-primary mx-1 my-1';
    }

    visitProfilesRemoveModel();
  });
}
