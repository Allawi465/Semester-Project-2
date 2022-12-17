import { viewingAll } from '../../api/auction/view.mjs';
import * as templates from '../../templates/index.mjs';
import { options, optionsWithTime } from './viewById.mjs';
export const spinner = document.getElementById('spinner');
import { visitProfilesRemoveModel } from '../profiles/buttonModel.mjs';

export const containerViewLists = document.querySelector('.renderAuction');

/**
 * Getting listings from api call
 * @param {listings} getting listings
 * @param {filteredNoBids} filtering listings with no bids
 * @param {renderPostsTemplate} temples for showing the posts
 */

export async function viewListings() {
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

  spinner.style.display = 'none';
  templates.renderTemplate(filteredNoBids, containerViewLists);

  visitProfilesRemoveModel();
}
