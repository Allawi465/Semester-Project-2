import { viewingAll } from '../../api/auction/view.mjs';
import * as templates from '../../templates/index.mjs';
import { options, optionsWithTime } from './viewById.mjs';
export const spinner = document.getElementById('spinner');
import { visitProfilesRemoveModel } from '../profiles/buttonModel.mjs';

export const containerViewLists = document.querySelector('.renderAuction');

/**
 * Getting posts from api call
 * @param {posts} getting posts
 * @param {filteredPosts} filtering the post
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
      listing._count.bids === 0 && listing.seller.avatar && listing.title
  );

  const filteredListings = sorterDate.filter(
    (listing) =>
      listing._count.bids > 0 && listing.seller.avatar && listing.title
  );

  console.log(filteredListings);
  spinner.style.display = 'none';
  templates.renderTemplate(filteredNoBids, containerViewLists);

  visitProfilesRemoveModel();
}
