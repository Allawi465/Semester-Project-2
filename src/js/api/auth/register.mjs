import { API_SOCIAL_URL } from '../constants.mjs';
export const messageRegister = document.querySelector('.error');
export const closeBtnModel = document.querySelector('.close-register');
import { hideErrorMessage } from '../../listeners/helpers/clearMessage.mjs';
const path = '/auth/register';
const method = 'POST';

/**
 * Register through api with post method
 * @param {register} api call with post method
 */

export async function register(user) {
  const signInModal = bootstrap.Modal.getOrCreateInstance(
    document.getElementById('loginModel')
  );
  const registerModal = bootstrap.Modal.getOrCreateInstance(
    document.getElementById('registerModel')
  );
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
    messageRegister.innerHTML = 'Profile already exists';
  }
}

/**
 * close model clear message
 *  @param {button} close model
 *  @param {messageRegister} clears message
 */

if (closeBtnModel) {
  closeBtnModel.addEventListener('click', () => {
    hideErrorMessage(messageRegister);
  });
}
