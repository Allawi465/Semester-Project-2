import * as localStorage from '../../storage/index.mjs';
import { MakeABid } from '../../api/auction/bid.mjs';

/**
 * deleting a post by id
 * @param {containerForPosts} using the card posts to get the id from
 * @param {deleting} sending to api call
 */

export function makeBid() {
  const form = document.getElementById('makeBid');
  const credits = localStorage.load('credits');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const bidAmount = Object.fromEntries(formData.entries());
      Object.keys(bidAmount).forEach((numb) => {
        bidAmount[numb] = parseInt(bidAmount[numb]);
      });
      MakeABid(bidAmount);
      form.reset();
      const newBalance = credits - bidAmount.amount;
      localStorage.save('credits', newBalance);
    });
  }
}
