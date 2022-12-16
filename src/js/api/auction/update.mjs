import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import { hideErrorMessage } from '../../listeners/helpers/clearMessage.mjs';
const errorUpdateMessage = document.querySelector('.error-update');
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
    errorUpdateMessage.innerHTML = `<p>We are aware of the issues, our team is actively working on it.</p>`;
  }
}

/**
 * close model clear message
 *  @param {button} close model
 *  @param {errorUpdateMessage} clears message
 */

closeBtn.forEach((close) => [
  close.addEventListener('click', () => {
    hideErrorMessage(errorUpdateMessage);
  }),
]);
