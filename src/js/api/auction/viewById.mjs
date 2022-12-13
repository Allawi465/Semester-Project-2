import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import { errorMessage } from './view.mjs';

const queryStringPostId = document.location.search;
const parameters = new URLSearchParams(queryStringPostId);
const id = parameters.get('id');

/**
 * view posts content with api get method
 * @param {get} get listings content by id
 * @param {fetchWToken} token from a function
 */

export async function viewById() {
  const path = `/listings/`;
  try {
    const getUrl = `${API_SOCIAL_URL}${path}${id}?_seller=true&_bids=true`;
    const response = await fetchWToken(getUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}

export async function listingsById(id) {
  const path = `/listings/`;
  try {
    const getUrl = `${API_SOCIAL_URL}${path}${id}?_seller=true&_bids=true`;
    const response = await fetchWToken(getUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}
