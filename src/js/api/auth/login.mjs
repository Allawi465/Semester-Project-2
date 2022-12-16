import { API_SOCIAL_URL } from '../constants.mjs';
import * as localStorage from '../../storage/index.mjs';
const message = document.querySelector('.errorMessage');
import { hideErrorMessage } from '../../listeners/helpers/clearMessage.mjs';

const closeBtn = document.querySelector('.btn-close');

const path = '/auth/login';
const method = 'POST';

/**
 * login through api with post method
 * @param {profile} api call with post method
 */

export async function login(profile) {
  const registerApiUrl = API_SOCIAL_URL + path;
  const body = JSON.stringify(profile);
  try {
    const response = await fetch(registerApiUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body,
    });

    if (response.status >= 401) {
      throw error;
    }

    const { accessToken, credits, ...data } = await response.json();

    if (data.status !== 201) {
      localStorage.save('token', accessToken);
      localStorage.save('profile', data);
      localStorage.save('credits', credits);
      location.reload();
    }
  } catch (error) {
    message.innerHTML = 'Invalid email or password';
  }
}

/**
 * close model clear message
 *  @param {button} close model
 *  @param {message} clears message
 */

closeBtn.addEventListener('click', () => {
  hideErrorMessage(message);
});
