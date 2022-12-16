import { optionsWithTime } from '../viewById.mjs';

/**
 * validate date if is in the past
 * @param {thePast} todays date
 * @param {listings} endsAt date
 */

export function validateDate(arg) {
  const bidOnBtn = document.querySelector('#bidOn');
  const endTime = document.querySelector('.endTime');
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
}

/**
 * check if a listings date id id the past
 * @param {today} todays date
 */

function thePast(date) {
  const today = new Date();
  return date < today;
}
