import { getProfiles, profilesBids } from '../../api/profiles/index.mjs';
import * as templates from '../../templates/index.mjs';
import {
  optionsWithTime,
  options,
  containerViewLists,
  spinner,
  renderProfileCard,
} from '../index.mjs';

import { containerBets } from '../profile/index.mjs';

/**
 * view profile from api call name
 * @param {profile} getting profile by name
 * @param {listings} getting profile listings by name
 * @param {templates} render profile with templates
 */

export async function viewProfiles() {
  const { listings, name, avatar, credits, ...profile } = await getProfiles();

  const winsLength = profile.wins.length;
  const listingsLength = listings.length;

  spinner.classList.remove('spinner-grow', 'my-4');

  renderProfileCard(name, avatar, credits, listingsLength, winsLength);

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

  if (listings.length === 0) {
    containerViewLists.innerHTML = 'No listings yet';
  }
  templates.renderProfilesListings(sorterDate, containerViewLists);

  const nameHtml = document.querySelectorAll('.profiles-name');
  const avatarHtml = document.querySelectorAll('.profiles-images');

  nameHtml.forEach((nameProfile) => {
    nameProfile.innerHTML = name;
  });

  avatarHtml.forEach((avatarProfile) => {
    avatarProfile.src = avatar;
  });
}

/**
 * view profile bids from api call name
 * @param {bets} getting profile bids by name
 * @param {templates} render profile with templates
 */

export async function ProfilesBid() {
  const bets = await profilesBids();

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

  if (bets.length === 0) {
    containerBets.innerHTML = 'No bets yet';
  }

  templates.renderProfilesBets(sorterBets, containerBets);
  const bidLength = document.querySelector('.bids-length');
  if (bidLength) {
    bidLength.innerHTML = bets.length;
  }
}
