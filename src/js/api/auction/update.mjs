import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import { hideErrorUpdate } from '../../listeners/helpers/clearMessage.mjs';
export const errorUpdateMessage = document.querySelector('.error-update');
const closeBtn = document.querySelectorAll('.close');

const path = '/listings/';
const method = 'PUT';

/**
 * Update content by id with api PUT method
 * @param {update} update content by id
 * @param {fetchWToken} token from a function
 * @param {postData} form data to update the content
 */

export async function update(postData) {
  try {
    const updateUrl = `${API_SOCIAL_URL}${path}${postData.id}`;
    const response = await fetchWToken(updateUrl, {
      method,
      body: JSON.stringify(postData),
    });
    location.reload();
    return await response.json();
  } catch (error) {
    errorUpdateMessage.innerHTML = `<p>we are aware of the issues, our team is actively working on it.</p>`;
  }
}

/**
 * close model clear message
 *  @param {button} close model
 *  @param {hideErrorUpdate} clears message
 */

closeBtn.forEach((close) => [close.addEventListener('click', hideErrorUpdate)]);
