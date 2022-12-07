import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';

const message = document.querySelector('.error-bid');
const closeBtn = document.querySelectorAll('.close');

const queryStringPostId = document.location.search;
const parameters = new URLSearchParams(queryStringPostId);
const id = parameters.get('id');

const path = `/listings/${id}/bids`;
const method = 'POST';

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
    }
  } catch (error) {
    message.innerHTML = `<p class="text-center fw-semibold error"> "You do not have enough balance to bid this amount"</p>`;
  }
}

closeBtn.forEach((close) => [
  close.addEventListener('click', hideErrorMessage),
]);

function hideErrorMessage() {
  if (message.value) {
    message.innerHTML = '';
  }
}
