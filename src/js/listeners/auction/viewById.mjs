import { viewById } from '../../api/auction/viewById.mjs';
import * as templates from '../../templates/index.mjs';
import { spinner } from './view.mjs';
import { validateDate } from './viewById/validateDate.mjs';
import { lastBidder } from './viewById/lastBidder.mjs';
import { localTime } from './viewById/localTime.mjs';
import { showImages } from './viewById/showImages.mjs';
import { showTag } from './viewById/showTags.mjs';
import { changeModel } from './viewById/changeModel.mjs';
export const container = document.querySelector('.singleItem');
export const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
export const optionsWithTime = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

/**
 * deleting a post by id
 * @param {containerForPosts} using the card posts to get the id from
 * @param {deleting} sending to api call
 */

export async function viewId() {
  const { media, tags, bids, ...item } = await viewById();

  const reverseBids = bids.sort((a, b) => b.amount - a.amount);

  spinner.classList.remove('spinner-grow');

  templates.renderPostById(item, container);

  const created = item.created;

  const endsAt = item.endsAt;

  const authorName = item.seller.name;

  localTime(created, endsAt);

  showImages(media);

  showTag(tags);

  changeModel();

  lastBidder(reverseBids);

  validateDate(endsAt, authorName);
}
