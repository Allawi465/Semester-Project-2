import * as listener from './listeners/index.mjs';
import './listeners/helpers/clear.mjs';

/**
 * router function with a switch statement
 * @param {path} getting location pathname to use in case
 * @param {break} using break statement within a switch statement's
 * @param {default} using default to direct the use to login page
 */

export default function router() {
  const path = location.pathname;

  switch (path) {
    case '/noxb/item/':
      listener.registerNewUsers();
      listener.authValidation();
      listener.loginUsers();
      listener.changeAvatar();
      listener.addItemToAuction();
      listener.viewId();
      listener.makeBid();
      listener.profileNavLink();
      listener.logOut();
      break;
    case '/noxb/profile/':
      listener.authValidation();
      listener.changeAvatar();
      listener.addItemToAuction();
      listener.viewProfile();
      listener.profileBid();
      listener.deleteAListing();
      listener.editAListings();
      listener.logOut();
      break;
    case '/noxb/profiles/':
      listener.authValidation();
      listener.changeAvatar();
      listener.addItemToAuction();
      listener.profileNavLink();
      listener.viewProfiles();
      listener.ProfilesBid();
      listener.logOut();
      break;
    case '/index.html':
      listener.viewListings();
      listener.sorterViewListings();
      listener.registerNewUsers();
      listener.loginUsers();
      listener.searchPosts();
      listener.authValidation();
      listener.changeAvatar();
      listener.addItemToAuction();
      listener.profileNavLink();
      listener.homeAboutUs();
      listener.logOut();
      break;
    default:
      location.href = '/index.html';
  }
}
