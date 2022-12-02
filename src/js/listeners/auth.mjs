import * as localStorage from '../storage/index.mjs';
import * as dropdown from '../templates/navbar.mjs';
const profileDropdown = document.getElementById('profileDropdown');

export const signInBtn = document.getElementById('signInBtn');

const footer = document.querySelector('footer');

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
