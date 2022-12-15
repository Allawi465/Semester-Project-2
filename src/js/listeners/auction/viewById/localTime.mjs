import { optionsWithTime, options } from '../viewById.mjs';

/**
 * change api date to norway local time with new Date
 * @param {endTime} created date
 * @param {localTimeCreated} endsAt date
 */

export function localTime(arg, arg2) {
  const endTime = document.querySelector('.endTime');
  const localTimeCreated = new Date(arg).toLocaleDateString('no-NO', options);

  const localTimeEnds = new Date(arg2).toLocaleDateString(
    'no-NO',
    optionsWithTime
  );

  const createdTime = document.querySelector('.created');

  createdTime.innerHTML = localTimeCreated;

  endTime.innerHTML = `Ends ${localTimeEnds}`;
}
