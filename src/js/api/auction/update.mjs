import { API_SOCIAL_URL } from '../constants.mjs';
import { fetchWToken } from '../headers.mjs';

const path = '/listings/';
const method = 'PUT';

/**
 * deleting content with api DELETE method
 * @param {deleting} DELETE content api by id
 *  @param {fetchWToken} token from a function
 */

export async function update(postData) {
  try {
    const updateUrl = `${API_SOCIAL_URL}${path}${postData.id}`;
    const response = await fetchWToken(updateUrl, {
      method,
      body: JSON.stringify(postData),
    });
    location.reload();
    return await response.json();
  } catch (error) {
    /*   message.innerHTML = `<p>we are aware of the issues with accessing NewDay. our team is actively working on it</p>`; */
  }
}
