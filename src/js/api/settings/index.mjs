import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import * as localStorage from '../../storage/index.mjs';
import { hideErrorMessage } from '../../listeners/helpers/clearMessage.mjs';

const errorMessageSettings = document.querySelector('.errorMessage-settings');
const closeModel = document.querySelector('.close-settings');

/**
 * change avatar with put method by name
 * @param {avatar} update avatar by name
 * @param {fetchWToken} token from a function
 * @param {settings} form data to update the avatar
 */

export async function settingAvatar(settings) {
  const { name } = localStorage.load('profile');
  const path = `/profiles/${name}/media`;
  const method = 'PUT';
  try {
    const getPostUrl = `${API_SOCIAL_URL}${path}`;
    const response = await fetchWToken(getPostUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      body: JSON.stringify(settings),
    });

    const data = await response.json();
    localStorage.save('profile', data);
    location.reload();
  } catch (error) {
    errorMessageSettings.innerHTML = `We are aware of the issues, our team is actively working on it.`;
  }
}

/**
 * close model clear message
 *  @param {button} close model
 *  @param {errorMessageSettings} clears message
 */

closeModel.addEventListener('click', () => {
  hideErrorMessage(errorMessageSettings);
});
