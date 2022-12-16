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
import { listingsById } from '../../api/auction/viewById.mjs';

export const container = document.querySelector('.profile-card');
export const containerBets = document.querySelector('.renderBets');
export const containerWins = document.querySelector('.renderWins');

/**
 * view profile from api call name
 * @param {profile} getting profile by name
 * @param {listings} getting profile listings by name
 * @param {bets} getting profile bids by name
 * @param {templates} render profile with templates
 */

export async function viewProfile() {
  const profile = await getProfile();

  if (profile.wins.length === 0) {
    containerWins.innerHTML = 'No wins yet';
  }

  spinner.classList.remove('spinner-grow');
  templates.profileTemplate(profile, container);
  const bidLength = document.querySelector('.bids-length');
  bidLength.innerHTML = profile.listings.length;
  winsGetListings(profile.wins);
}

/**
 * view profile listings from api call name
 * @param {listings} getting profile listings by name
 * @param {bets} getting profile bids by name
 * @param {templates} render profile with templates
 */

export async function ProfileListing() {
  const listings = await profileListings();

  console.log;

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

  templates.renderListings(sorterDate, containerViewLists);
}

/**
 * view profile bids from api call name
 * @param {listings} getting profile listings by name
 * @param {bets} getting profile bids by name
 * @param {templates} render profile with templates
 */

export async function renderProfileBids() {
  const bets = await profileBids();

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

  templates.renderBets(sorterBets, containerBets);
}

/**
 * view profile wins with foreach
 * @param {listingsById} get listings by id
 */

function winsGetListings(arg) {
  arg.forEach(async (wins) => {
    const getWinsListings = await listingsById(wins);
    templates.profileTemplateWins(getWinsListings, containerWins);
  });
}
