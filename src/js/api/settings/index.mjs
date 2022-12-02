import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import * as localStorage from '../../storage/index.mjs';

const errorMessage = document.querySelector('.errorMessage-settings');

/**
 * view posts content with api get method
 * @param {get} get posts content
 * @param {fetchWToken} token from a function
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
    errorMessage.innerHTML = `<p>we are aware of the issues, our team is actively working on it.</p>`;
  }
}
