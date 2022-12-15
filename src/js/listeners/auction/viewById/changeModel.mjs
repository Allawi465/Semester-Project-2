import * as localStorage from '../../../storage/index.mjs';

/**
 * change model path if user log in
 * @param {bidOnBtn} button
 * @param {token} if token exists
 */

export function changeModel() {
  const bidOnBtn = document.querySelectorAll('#bidOn');
  const token = localStorage.load('token');
  bidOnBtn.forEach((btn) => {
    if (token) {
      btn.dataset.bsTarget = '#bidModel';
    }
  });
}
