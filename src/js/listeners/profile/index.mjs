import { getProfile, profileListings } from '../../api/profiles/index.mjs';
import * as templates from '../../templates/index.mjs';

const container = document.querySelector('.profile-card');

export async function viewProfile() {
  const meProfile = await getProfile();

  const listings = await profileListings();

  console.log(listings);

  templates.profileTemplate(meProfile, container);
}
