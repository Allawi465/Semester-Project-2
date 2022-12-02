import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';

export const errorMessage = document.querySelector('.message');

const path = '/listings';
const method = 'Get';
const limit = 10;

/**
 * view posts content with api get method
 * @param {get} get posts content
 * @param {fetchWToken} token from a function
 */

export async function viewingAll() {
  try {
    const getUrl = `${API_SOCIAL_URL}${path}?_seller=true&_bids=true&limit=${limit}`;
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
