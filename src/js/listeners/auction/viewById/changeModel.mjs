import * as localStorage from '../../../storage/index.mjs';
export function changeModel() {
  const bidOnBtn = document.querySelectorAll('#bidOn');
  const token = localStorage.load('token');
  bidOnBtn.forEach((btn) => {
    if (token) {
      btn.dataset.bsTarget = '#bidModel';
    }
  });
}
