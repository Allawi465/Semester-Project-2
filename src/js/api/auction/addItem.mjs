import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import { hideErrorAddItem } from '../../listeners/helpers/clearMessage.mjs';

export const errorMessage = document.querySelector('.error-create');

const closeBtn = document.querySelectorAll('.close');

const path = '/listings';
const method = 'POST';

/**
 * create content with api post method
 * @param {create} create content api with post method
 * @param {ListingData} form data to create content
 *  @param {fetchWToken} token from a function
 */

export async function creatingListing(ListingData) {
  try {
    const creatingUrl = API_SOCIAL_URL + path;
    const response = await fetchWToken(creatingUrl, {
      method,
      body: JSON.stringify(ListingData),
    });
    location.reload();
    return await response.json();
  } catch (error) {
    errorMessage.innerHTML = `<p>we are aware of the issues, our team is actively working on it.</p>`;
  }
}

/**
 * close model clear message
 *  @param {button} close model
 *  @param {hideErrorAddItem} clears message
 */

closeBtn.forEach((close) => [
  close.addEventListener('click', hideErrorAddItem),
]);
