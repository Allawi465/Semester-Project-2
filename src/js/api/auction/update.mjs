import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';

const path = '/listings';
const method = 'PUT';

/**
 * deleting content with api DELETE method
 * @param {deleting} DELETE content api by id
 *  @param {fetchWToken} token from a function
 */

export async function update(id) {
  try {
    const deletingPostUrl = `${API_SOCIAL_URL}${path}${id}`;
    const response = await fetchWToken(deletingPostUrl, {
      method,
    });
    location.reload();
    return await response.json();
  } catch (error) {
    /*   message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`; */
  }
}
