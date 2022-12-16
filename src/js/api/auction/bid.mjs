import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import { hideErrorMessage } from '../../listeners/helpers/clearMessage.mjs';
const messageForBid = document.querySelector('.error-bid');
const closeBtn = document.querySelectorAll('.close');

const queryStringPostId = document.location.search;
const parameters = new URLSearchParams(queryStringPostId);
const id = parameters.get('id');

const path = `/listings/${id}/bids`;
const method = 'POST';

/**
 * send bid to listing with api post method
 * @param {view} view listings
 * @param {amount} form data to bid to listings
 *  @param {fetchWToken} token from a function
 */

export async function MakeABid(amount) {
  try {
    const url = `${API_SOCIAL_URL}${path}`;
    const response = await fetchWToken(url, {
      method,
      body: JSON.stringify(amount),
    });

    if (response.status >= 400) {
      throw error;
    }

    const data = await response.json();

    if (data.status !== 200) {
      location.reload();
      return true;
    }
  } catch (error) {
    messageForBid.innerHTML = `<p class="text-center fw-semibold error"> "You do not have enough balance to bid this amount"</p>`;
  }
}

/**
 * close model clear message
 *  @param {button} close model
 *  @param {messageForBid} clears message
 */

closeBtn.forEach((close) => [
  close.addEventListener('click', () => {
    hideErrorMessage(messageForBid);
  }),
]);
