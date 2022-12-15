import * as localStorage from '../../storage/index.mjs';
import { MakeABid } from '../../api/auction/bid.mjs';

/**
 * bid on listing by id
 * @param {credits} using the card listing to get the id from
 * @param {formData} making new form to update the post by id
 */
export function makeBid() {
  const form = document.getElementById('makeBid');
  const credits = localStorage.load('credits');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const bidAmount = Object.fromEntries(formData.entries());
      Object.keys(bidAmount).forEach((numb) => {
        bidAmount[numb] = parseInt(bidAmount[numb]);
      });
      const response = await MakeABid(bidAmount);
      if (response === true) {
        const newBalance = credits - bidAmount.amount;
        localStorage.save('credits', newBalance);
      }
      form.reset();
    });
  }
}
