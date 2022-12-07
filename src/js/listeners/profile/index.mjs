import {
  getProfile,
  profileListings,
  profileBids,
} from '../../api/profiles/index.mjs';
import * as templates from '../../templates/index.mjs';

const container = document.querySelector('.profile-card');

export async function viewProfile() {
  const meProfile = await getProfile();

  const listings = await profileListings();

  const bids = await profileBids();

  console.log(bids, listings);

  templates.profileTemplate(meProfile, container);
}
