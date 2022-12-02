import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import { errorMessage } from './view.mjs';

const queryStringPostId = document.location.search;
const parameters = new URLSearchParams(queryStringPostId);
const id = parameters.get('id');

const path = `/listings/${id}`;
const method = 'Get';

/**
 * view posts content with api get method
 * @param {get} get posts content
 * @param {fetchWToken} token from a function
 */

export async function viewById() {
  try {
    const getUrl = `${API_SOCIAL_URL}${path}?_seller=true&_bids=true`;
    const response = await fetchWToken(getUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
      method,
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}
