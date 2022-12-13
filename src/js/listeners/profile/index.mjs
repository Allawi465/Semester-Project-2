import {
  getProfile,
  profileListings,
  profileBids,
} from '../../api/profile/index.mjs';
import * as templates from '../../templates/index.mjs';

import {
  optionsWithTime,
  options,
  containerViewLists,
  spinner,
} from '../index.mjs';

const container = document.querySelector('.profile-card');
const containerBets = document.querySelector('.renderBets');

export async function viewProfile() {
  const meProfile = await getProfile();

  const listings = await profileListings();

  const bets = await profileBids();

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

  const sorterBets = bets.map((bet) => {
    return {
      ...bet,
      created: new Date(bet.created).toLocaleDateString(
        'no-NO',
        optionsWithTime
      ),
    };
  });

  spinner.classList.remove('spinner-grow');

  if (listings.length === 0) {
    containerViewLists.innerHTML = 'No listings yet';
  } else if (bets.length === 0) {
    containerBets.innerHTML = 'No bets yet';
  }

  templates.profileTemplate(meProfile, container);
  templates.renderListings(sorterDate, containerViewLists);
  templates.renderBets(sorterBets, containerBets);
}
