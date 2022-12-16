import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
const deleteErrorMessage = document.querySelector('.error-message');
import { hideErrorMessage } from '../../listeners/helpers/clearMessage.mjs';
const closeBtn = document.querySelectorAll('.close');

const path = '/listings/';
const method = 'DELETE';

/**
 * deleting listing with api DELETE method
 * @param {id} DELETE content api by id
 *  @param {fetchWToken} token from a function
 */

export async function deleting(id) {
  try {
    const deletingUrl = `${API_SOCIAL_URL}${path}${id}`;
    const response = await fetchWToken(deletingUrl, {
      method,
    });
    location.reload();
    return await response.json();
  } catch (error) {
    deleteErrorMessage.innerHTML = `<p>we are aware of the issues, our team is actively working on it.</p>`;
  }
}

/**
 * close model clear message
 *  @param {button} close model
 *  @param {messageForBid} clears message
 */

closeBtn.forEach((close) => [
  close.addEventListener('click', () => {
    hideErrorMessage(deleteErrorMessage);
  }),
]);
