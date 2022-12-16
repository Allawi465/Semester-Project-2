import { viewById } from '../../api/auction/viewById.mjs';
import * as templates from '../../templates/index.mjs';
import { spinner } from './view.mjs';
import { validateDate } from './viewById/validateDate.mjs';
import { lastBidder } from './viewById/lastBidder.mjs';
import { localTime } from './viewById/localTime.mjs';
import { showImages } from './viewById/showImages.mjs';
import { showTag } from './viewById/showTags.mjs';
import { changeModel } from './viewById/changeModel.mjs';
import { visitProfilesRemoveModel } from '../profiles/buttonModel.mjs';
export const container = document.querySelector('.singleItem');
import { authHideBidBtn } from '../auth/auth.mjs';
export const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
export const optionsWithTime = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
};

/**
 * Get a listings by id from api call
 * @param {viewById} getting a single post by id
 * @param {renderPostById} temples for showing the listing
 * @param {localTime} showing listing date with new Date
 * @param {showImages} showing listing images with carousel
 * @param {showTag} showing listing tags
 * @param {changeModel} change button model id
 * @param {lastBidder} showing listing bidders
 * @param {validateDate} validate listing endsAt date if is in the past
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

  visitProfilesRemoveModel();

  authHideBidBtn(authorName);
}
