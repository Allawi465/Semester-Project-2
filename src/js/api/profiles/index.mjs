import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import { errorMessage } from '../auction/view.mjs';

const queryStringPostId = document.location.search;
const parameters = new URLSearchParams(queryStringPostId);
const name = parameters.get('name');

const path = `/profiles/${name}`;
const method = 'GET';

/**
 * get profile by name with api get method
 * @param {get} get profile
 * @param {fetchWToken} token from a function
 */

export async function getProfile() {
  try {
    const urls = `${API_SOCIAL_URL}${path}?_listings=true`;
    const response = await fetchWToken(urls, {
      method,
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}

/**
 * get profile listings by name with api get method
 * @param {listings} get profile
 * @param {fetchWToken} token from a function
 */

export async function profileListings() {
  try {
    const urls = `${API_SOCIAL_URL}${path}/listings?_bids=true`;
    const response = await fetchWToken(urls, {
      method,
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}

/**
 * get profile bids by name with api get method
 * @param {bids} get profile
 * @param {fetchWToken} token from a function
 */

export async function profileBids() {
  try {
    const urls = `${API_SOCIAL_URL}${path}/bids?_listings=true`;
    const response = await fetchWToken(urls, {
      method,
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}
