import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';
import { errorMessage } from '../auction/view.mjs';
import * as localStorage from '../../storage/index.mjs';

const path = '/profiles/';
const method = 'GET';

/**
 * Get profile by name with api get method
 * @param {get} get posts content
 * @param {fetchWToken} token from a function
 */

export async function getProfile() {
  try {
    const { name } = localStorage.load('profile');
    const urls = `${API_SOCIAL_URL}${path}${name}?_listings=true`;
    const response = await fetchWToken(urls, {
      method,
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}

export async function profileListings() {
  try {
    const { name } = localStorage.load('profile');
    const urls = `${API_SOCIAL_URL}${path}${name}/listings?_bids=true`;
    const response = await fetchWToken(urls, {
      method,
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}

export async function profileBids() {
  try {
    const { name } = localStorage.load('profile');
    const urls = `${API_SOCIAL_URL}${path}${name}/bids?_listings=true`;
    const response = await fetchWToken(urls, {
      method,
    });

    return await response.json();
  } catch (error) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = `<p class="text-center fw-semibold">we are aware of the issues with accessing NOxB, our team is actively working on it.</p>`;
  }
}
