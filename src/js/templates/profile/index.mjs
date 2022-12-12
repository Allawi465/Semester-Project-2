import { load } from '../../storage/index.mjs';

export function TemplateProfile(profile) {
  return `
    <div class="card text-white bg-dark">
        <div class="card-body tet-white">
            <div class="text-center">
                <img src="${profile.avatar}" class="rounded-circle mt-2 profil-page-images" width="100"
                    height="100" alt="profil images">
            </div>
            <div class="text-center mt-2">
                <h2 class="text-capitalize">@${profile.name}</h2>
                <span class="badge bg-white text-black mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width="16" height="16" class="mb-1 me-1" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                        <path
                            d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                        d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>${profile.credits}
                </span>
                <div class="d-flex flex-row profil-info mt-3">
                    <div class="col">
                        <p class="mb-1">${profile._count.listings}</p>
                        <strong>Listings</strong>
                    </div>
                    <div class="col">
                        <p class="mb-1">${profile.wins.length}</p>
                        <strong>Bets</strong>
                    </div>
                    <div class="col">
                        <p class="mb-1">${profile.wins.length}</p>
                        <strong>wins</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}

export function profileTemplate(profile, parent) {
  parent.innerHTML += TemplateProfile(profile);
}

export function viewProfileListing(listings) {
  const { avatar, name } = load('profile');
  return ` 
      <div class="col my-2">
          <div class="card shadow-sm bg-dark text-white shadow-lg p-3 mb-2 rounded" style="border: none;">
              <div class="card-header d-flex justify-content-between" style="border: none;">
                  <div class="d-flex flex-row align-items-center">
                      <div
                          class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                          <img src="${avatar}"  width="50" height="50" alt=""
                              class="rounded-circle profile-images-topBar">
                      </div>
                      <span class="font-weight-bol text-capitalize">${name}</span>
                  </div>
                  <p class="card-text"><small class="text-muted created">${listings.created}</small></p>
              </div>
              <div class="card-body">
                  <div class="d-flex justify-content-between">
                      <div> 
                          <h5 class="me-2">${listings.title}</h5>
                      </div>
                      <div class="d-flex">
                          <p class="badge text-uppercase bg-warning text-black me-2 bids-list-badge" style="max-height: 25px;"><span class="bids-list-text">BIDS</span></p>
                          <span class=" fw-bolder">${listings._count.bids}</span>
                      </div>
                  </div>
              </div>
              <div class="card-footer mb-2">
                  <div class="d-flex justify-content-between align-items-center">
                      <a type="button" class="btn btn-outline-light me-2"
                      href="/NOxB/auction/item/?id=${listings.id}">View</a>   
                      <small class="fs-6 text fw-bold endDate">Ends ${listings.endsAt}</small>
                  </div>
              </div>
          </div>
        </div>`;
}

export function viewProfileBets(listings) {
  const { avatar, name } = load('profile');
  return ` 
      <div class="col my-2">
          <div class="card shadow-sm bg-dark text-white shadow-lg p-3 mb-2 rounded" style="border: none;">
              <div class="card-header d-flex justify-content-between" style="border: none;">
                  <div class="d-flex flex-row align-items-center">
                      <div
                          class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                          <img src="${avatar}"  width="50" height="50" alt=""
                              class="rounded-circle profile-images-topBar">
                      </div>
                      <span class="font-weight-bol text-capitalize">${name}</span>
                  </div>
                  <p class="card-text"><small class="text-muted created">${listings.created}</small></p>
              </div>
              <div class="card-body">
                  <div class="d-flex justify-content-between">
                      <div> 
                          <h5 class="me-2">Bid: ${listings.amount} <svg xmlns="http://www.w3.org/2000/svg"
                          width="16" height="16" class="mb-1 me-1" fill="currentColor" class="bi bi-coin" viewBox="0 0 16 16">
                          <path
                              d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path
                          d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                      </svg></h5>
                      </div>
                  </div>
              </div>
              <div class="card-footer mb-2">
                  <div class="d-flex justify-content-between align-items-center">
                      <a type="button" class="btn btn-outline-light me-2"
                      href="/NOxB/auction/item/?id=${listings.listing.id}">View</a>   
                  </div>
              </div>
          </div>
        </div>`;
}

/**
 * Template to render html listings with forEach
 * @param {viewProfileListing} getting the html return from a function
 * @param {forEach} render html posts with forEach
 */

export function renderListings(listings, parent) {
  listings.forEach((listings) => {
    parent.innerHTML += viewProfileListing(listings);
  });
}

/**
 * Template to render html listings with forEach
 * @param {viewProfileBets} getting the html return from a function
 * @param {for loop} render html posts with for loop
 */

export function renderBets(listings, parent) {
  for (let i = 0; i < listings.length; i++) {
    parent.innerHTML += viewProfileBets(listings[i]);
    if (listings[i] === listings[10]) break;
  }
}
