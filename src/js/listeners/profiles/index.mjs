import {
  getProfiles,
  profilesBids,
  profilesListings,
} from '../../api/profiles/index.mjs';
import { listingsById } from '../../api/auction/viewById.mjs';
import * as templates from '../../templates/index.mjs';
import {
  optionsWithTime,
  options,
  containerViewLists,
  spinner,
} from '../index.mjs';

import { container, containerBets, containerWins } from '../profile/index.mjs';

/**
 * view profile from api call name
 * @param {profile} getting profile by name
 * @param {listings} getting profile listings by name
 * @param {bets} getting profile bids by name
 * @param {templates} render profile with templates
 */

export async function viewProfiles() {
  const profile = await getProfiles();
  const bids = await profilesBids();
  const listings = await profilesListings();

  spinner.classList.remove('spinner-grow');
  templates.profilesTemplate(profile, container);

  const bidLength = document.querySelector('.bids-length');
  bidLength.innerHTML = bids.length;

  if (listings.length === 0) {
    containerViewLists.innerHTML = 'No listings yet';
  } else {
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
    templates.renderProfilesListings(sorterDate, containerViewLists);
  }
  if (bids.length === 0) {
    containerBets.innerHTML = 'No bets yet';
  } else {
    const sorterBets = bids.map((bet) => {
      return {
        ...bet,
        created: new Date(bet.created).toLocaleDateString(
          'no-NO',
          optionsWithTime
        ),
      };
    });
    templates.renderProfilesBets(sorterBets, containerBets);
  }

  if (profile.wins.length === 0) {
    containerWins.innerHTML = 'No wins yet';
  } else {
    winsGetListings(profile.wins);
  }

  const name = document.querySelectorAll('.profiles-name');
  const avatar = document.querySelectorAll('.profiles-images');

  name.forEach((nameProfile) => {
    nameProfile.innerHTML = profile.name;
  });

  avatar.forEach((avatarProfile) => {
    avatarProfile.src = profile.avatar;
  });
}

/**
 * view profile wins with foreach
 * @param {listingsById} get listings by id
 */

function winsGetListings(arg) {
  arg.forEach(async (wins) => {
    const getWinsListings = await listingsById(wins);
    templates.profilesTemplateWins(getWinsListings, containerWins);
  });
}
