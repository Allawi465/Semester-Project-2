import * as localStorage from '../../storage/index.mjs';
import * as dropdown from '../../templates/navbar.mjs';
const profileDropdown = document.getElementById('profileDropdown');
export const signInBtn = document.getElementById('signInBtn');
const footer = document.querySelector('footer');

/**
 * display navBar dropdown when log in
 * @param {token} check if token is true
 * @param {renderNavbarImage} dropdown render html
 * @param {footer} display footer
 */

export function authValidation() {
  const token = localStorage.load('token');
  profileDropdown.style.display = 'none';
  if (token) {
    profileDropdown.style.display = 'block';
    dropdown.renderNavbarImage();
    footer.style.display = 'block';
  } else {
    signInBtn.style.display = 'block';
  }
}

/**
 * display navBar link profile when log in
 * @param {token} check if token is true
 * @param {profileLink} display navbar link
 */

export function profileNavLink() {
  const profileLink = document.querySelector('.profile-link');
  const token = localStorage.load('token');
  if (token) {
    profileLink.style.display = 'block';
  }
}

/**
 * hide about us section when user log in
 * @param {token} check if token is true
 * @param {aboutUs} display "none" when user log in
 */

export function homeAboutUs() {
  const aboutUs = document.querySelector('.aboutUs');
  const token = localStorage.load('token');
  if (token) {
    aboutUs.style.display = 'none';
  } else {
    aboutUs.style.display = 'block';
  }
}

/**
 * hide bid button if user log in to his own listings
 * @param {token} check if token is true
 * @param {name} check if profile is true
 * @param {bidOnBtn} display "none" when user log in
 */

export function authHideBidBtn(author) {
  const token = localStorage.load('token');
  const bidOnBtn = document.querySelector('#bidOn');
  if (token) {
    const { name } = localStorage.load('profile');
    if (author === name) {
      bidOnBtn.style.display = 'none';
    }
  }
}
