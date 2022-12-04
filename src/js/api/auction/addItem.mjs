import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';

const errorMessage = document.querySelector('.error-create');

const path = '/listings';
const method = 'POST';

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
    console.log(error);
  }
}
