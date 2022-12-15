import { load } from '../storage/index.mjs';
import { dollar } from '../listeners/auction/viewById/lastBidder.mjs';
/**
 * getting the profile avatar, name and credits from local storage
 * @param {loadTheValue} getting the avatar value from loadTheValue function
 * @param {avatar} render the avatar value
 * @param {name} render the name value
 * @param {credits} render the credits value
 */

export function renderNavbarImage() {
  const { avatar, name } = load('profile');
  const credits = load('credits');
  const navbarImages = document.querySelector('.navbarImages');
  const navbarName = document.querySelector('.navbarName');
  const navbarCredit = document.querySelector('.navbarCredit');

  navbarImages.src = avatar;
  navbarName.innerHTML = name;
  navbarCredit.innerHTML = `${dollar}${credits}`;
}
