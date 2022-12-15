import * as localStorage from '../../../storage/index.mjs';
import { optionsWithTime } from '../viewById.mjs';

/**
 * validate date if is in the past
 * @param {thePast} todays date
 * @param {listings} endsAt date
 * @param {name} if listing author === name it hide bid button
 */

export function validateDate(arg, author) {
  const bidOnBtn = document.querySelector('#bidOn');
  const endTime = document.querySelector('.endTime');
  const { name } = localStorage.load('profile');
  const NoBidsTexts = document.querySelector('.NobidsTexts');
  if (thePast(new Date(arg)) === true) {
    const endedDate = new Date(arg).toLocaleDateString(
      'no-NO',
      optionsWithTime
    );
    endTime.innerHTML = `Ended ${endedDate}`;
    bidOnBtn.style.display = 'none';
    NoBidsTexts.innerHTML = 'No bids were made';
  }
  if (author === name) {
    bidOnBtn.style.display = 'none';
    NoBidsTexts.innerHTML = 'No bids yet';
  }
}

/**
 * check if a listings date id id the past
 * @param {today} todays date
 */

function thePast(date) {
  const today = new Date();
  return date < today;
}
