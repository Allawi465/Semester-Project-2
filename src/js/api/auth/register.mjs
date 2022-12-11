import { API_SOCIAL_URL } from '../constants.mjs';
const message = document.querySelector('.error');
const closeBtn = document.querySelector('.registeR-close');

const signInModal = bootstrap.Modal.getOrCreateInstance(
  document.getElementById('loginModel')
);
const registerModal = bootstrap.Modal.getOrCreateInstance(
  document.getElementById('registerModel')
);

const path = '/auth/register';
const method = 'POST';

/**
 * Register through api with post method
 * @param {register} api call with post method
 */

export async function register(user) {
  const registerApiUrl = API_SOCIAL_URL + path;
  const body = JSON.stringify(user);
  try {
    const response = await fetch(registerApiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body,
    });

    if (response.status >= 400) {
      throw error;
    }

    const data = await response.json();

    if (data.status !== 201) {
      signInModal.show();
      registerModal.hide();
    }
  } catch (error) {
    message.innerHTML = 'Profile already exists';
  }
}

closeBtn.addEventListener('click', hideErrorMessage);

function hideErrorMessage() {
  if (message) {
    message.innerHTML = '';
  }
}
