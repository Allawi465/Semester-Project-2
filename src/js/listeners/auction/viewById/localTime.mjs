import { optionsWithTime, options } from '../viewById.mjs';

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
