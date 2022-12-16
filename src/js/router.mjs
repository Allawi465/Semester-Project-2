import * as listener from './listeners/index.mjs';

/**
 * router function with a switch statement
 * @param {path} getting location pathname to use in case
 * @param {break} using break statement within a switch statement's
 * @param {default} using default to direct the use to login page
 */

export default function router() {
  const path = location.pathname;

  switch (path) {
    case '/NOxB/home/':
      listener.viewListings();
      listener.authValidation();
      listener.logOut();
      listener.registerNewUsers();
      listener.loginUsers();
      listener.changeAvatar();
      listener.addItemToAuction();
      listener.profileNavLink();
      listener.homeAboutUs();
      break;
    case '/NOxB/auction/item/':
      listener.authValidation();
      listener.logOut();
      listener.loginUsers();
      listener.changeAvatar();
      listener.addItemToAuction();
      listener.viewId();
      listener.makeBid();
      listener.profileNavLink();
      break;
    case '/NOxB/profile/':
      listener.authValidation();
      listener.logOut();
      listener.changeAvatar();
      listener.addItemToAuction();
      listener.viewProfile();
      listener.ProfileListing();
      listener.renderProfileBids();
      listener.deleteAListing();
      listener.editAListings();
      break;
    case '/NOxB/profiles/':
      listener.authValidation();
      listener.logOut();
      listener.changeAvatar();
      listener.addItemToAuction();
      listener.profileNavLink();
      listener.viewProfiles();
      break;
    default:
      location.href = '/NOxB/home/';
  }
}

router();
