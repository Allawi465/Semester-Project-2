import { getProfile, profileBids } from '../../api/profile/index.mjs';
import * as templates from '../../templates/index.mjs';
import { dollar } from '../auction/viewById/lastBidder.mjs';
import {
  optionsWithTime,
  options,
  containerViewLists,
  spinner,
} from '../index.mjs';
import {
  profileAvatar,
  profileName,
  credits,
  listingsLength,
  WinsLength,
} from '../../templates/profiles/profileCard.mjs';

export const container = document.querySelector('.profile-card');
export const containerBets = document.querySelector('.renderBets');

/**
 * view profile from api call name
 * @param {profile} getting profile by name
 * @param {listings} getting profile listings by name
 * @param {templates} render profile with templates
 */

export async function viewProfile() {
  const { listings, name, avatar, credits, ...profile } = await getProfile();

  const winsLength = profile.wins.length;
  const listingsLength = listings.length;

  if (listings.length === 0) {
    containerViewLists.innerHTML = 'No listings yet';
  }

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

  spinner.classList.remove('spinner-grow', 'my-4');
  templates.renderListings(sorterDate, containerViewLists);
}

/**
 * view profile bids from api call name
 * @param {bets} getting profile bids by name
 * @param {templates} render profile with templates
 */

export async function profileBid() {
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
    containerBets.innerHTML = 'No bids yet';
  }

  templates.renderBets(sorterBets, containerBets);

  const bidLength = document.querySelector('.bids-length');
  bidLength.innerHTML = bets.length;
}

/**
 * render profile card value
 * @param {viewProfile} get values from viewProfiles
 */

export function renderProfileCard(name, avatar, credit, listings, win) {
  profileName.innerHTML = name;
  profileAvatar.src = avatar;
  profileAvatar.alt = `${name} avatar`;
  credits.innerHTML = `${dollar}${credit}`;
  listingsLength.innerHTML = listings;
  WinsLength.innerHTML = win;
}
