import { optionsWithTime } from '../viewById.mjs';

/**
 * view last bidder and bidders
 * @param {lastBidder} create bid list
 * @param {currentPrice} view highest bid
 */

export function lastBidder(arg) {
  const lastBidder = document.querySelector('.bidList');
  const currentPrice = document.querySelector('.current-price');
  if (arg.length > 0) {
    bidInput.setAttribute('min', arg[0].amount + 1);
    currentPrice.innerHTML = `${arg[0].amount} ${dollar}`;
    arg.forEach((bids) => {
      const created = new Date(bids.created).toLocaleDateString(
        'no-NO',
        optionsWithTime
      );
      lastBidder.innerHTML += `<li class="list-group-item bid-ol d-flex justify-content-between align-items-start my-1 text-white bg-dark" style="margin: 5px;">
                                  <div class="ms-2 me-auto">
                                    <a type="button" class="link-profile text-white" data-bs-toggle="modal" data-bs-target="#loginModel" href="/NOxB/profiles/?name=${bids.bidderName}" style="text-decoration: none";> <div><span class="fw-bold text-capitalize">${bids.bidderName}</span><span> bid </span></div></a>
                                  <span style="color: #bac8d5;">${created}</span>
                                  </div>
                                  <span>${bids.amount} ${dollar}</span>
                                </li>`;
    });
  } else {
    lastBidder.innerHTML = `
      <li class="text-center my-1" style="margin: 5px;">
        <p class="NobidsTexts">
          Be the first to make a <span class="text-decoration-underline">bid</span>
        </p>
      </li>`;
    lastBidder.classList.remove('bg-white');
    lastBidder.classList.add('bg-dark');
    bidInput.setAttribute('min', 1);
    currentPrice.innerHTML = `0 ${dollar}`;
  }
}

// dollar sign svg

export const dollar = `
<svg xmlns="http://www.w3.org/2000/svg"
  width="20" height="20" fill="currentColor" class="bi bi-coin coin" viewBox="0 0 16 16">
  <path
  d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
  <path
  d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
</svg>`;
