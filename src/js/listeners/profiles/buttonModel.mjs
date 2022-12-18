import * as localStorage from '../../storage/index.mjs';

/**
 * change model path if user log in
 * @param {profileLink} button link
 * @param {token} if token exists
 */

export function visitProfilesRemoveModel() {
  const profileLink = document.querySelectorAll('.link-profile');
  const token = localStorage.load('token');
  profileLink.forEach((btn) => {
    if (token) {
      btn.removeAttribute('data-bs-toggle');
      btn.removeAttribute('data-bs-target');
    } else {
      btn.removeAttribute('href');
    }
  });
}
