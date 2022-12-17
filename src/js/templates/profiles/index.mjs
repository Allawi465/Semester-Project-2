/**
 * view profile listings html as return from the function
 * @param {return} returning html post div
 */

export function viewProfilesListing(listings) {
  return ` 
      <div class="col my-2">
          <div class="card shadow-sm bg-dark text-white shadow-lg p-3 mb-2 rounded profile-card-listings" style="border: none;">
              <div class="card-header d-flex justify-content-between" style="flex-wrap: wrap;">
                    <div class="d-flex flex-row align-items-center">
                      <div
                          class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                          <img src=""  width="50" height="50" alt="profile avatar"
                              class="rounded-circle profiles-images">
                      </div>
                      <span class="font-weight-bol text-capitalize profiles-name">${listings.bidderName}</span>
                    </div>
                    <div class="d-flex" style="flex-wrap: wrap;"> 
                        <p class="card-tex me-2 card-text-listings"><small class="created" style="color: #bac8d5;">${listings.created}</small></p>
                    </div>
                </div>
                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <div style="max-width: 250px;"> 
                        <h5 class="card-title text-break me-2 card-text-listings" style="max-width: 300px;">${listings.title}</h5>
                    </div>
                </div>
              </div>
              <div class="card-footer mb-2">
                  <div class="d-flex justify-content-between align-items-center" style="flex-wrap: wrap;">
                      <a type="button" class="btn btn-outline-light mb-2"
                      href="/item.html?id=${listings.id}">View</a>   
                      <small class="fs-6 text fw-bold endDate" style="color: #bac8d5;">Ends ${listings.endsAt}</small>
                  </div>
              </div>
          </div>
        </div>`;
}

/**
 * Template to render html listings with forEach
 * @param {viewProfilesListing} getting the html return from a function
 * @param {forEach} render html posts with forEach
 */

export function renderProfilesListings(listings, parent) {
  for (let i = 0; i < listings.length; i++) {
    parent.innerHTML += viewProfilesListing(listings[i]);
    if (listings[i] === listings[9]) break;
  }
}

/**
 * view profile bids html as return from the function
 * @param {return} returning html post div
 */

export function viewProfilesBets(listings) {
  return ` 
      <div class="col my-2">
          <div class="card shadow-sm bg-dark text-white shadow-lg p-3 mb-2 rounded" style="border: none;">
              <div class="card-header d-flex justify-content-between" style="border: none;">
                      <span class="font-weight-bol text-capitalize mt-2">${listings.bidderName}</span>
                  <p class="card-text"><small class="created" style="color: #bac8d5;">${listings.created}</small></p>
              </div>
              <div class="card-body">
                  <div class="d-flex justify-content-between">
                      <div> 
                          <h5 class="me-2">Bid amount: ${listings.amount} <svg xmlns="http://www.w3.org/2000/svg"
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
                      href="/item.html?id=${listings.listing.id}">View</a>   
                  </div>
              </div>
          </div>
        </div>`;
}

/**
 * Template to render html listings with forEach
 * @param {viewProfilesBets} getting the html return from a function
 * @param {for loop} render html posts with for loop
 */

export function renderProfilesBets(listings, parent) {
  for (let i = 0; i < listings.length; i++) {
    parent.innerHTML += viewProfilesBets(listings[i]);
    if (listings[i] === listings[9]) break;
  }
}

/**
 * view profile wins html as return from the function
 * @param {return} returning html post div
 */

export function viewProfilesWins(listings) {
  return ` 
        <div class="col my-2">
            <div class="card shadow-sm bg-dark text-white shadow-lg p-3 mb-2 rounded profile-card-listings" style="border: none;">
                <div class="card-header d-flex justify-content-between" style="flex-wrap: wrap;">
                    <a type="button" class="link-profile text-white" href="/profiles.html?name=${listings.seller.name}" style="text-decoration: none";> 
                        <div class="d-flex flex-row align-items-center" >
                            <div
                                class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                                <img src="${listings.seller.avatar}"  width="50" height="50" alt=""
                                    class="rounded-circle profile-images-topBar">
                            </div>
                            <span class="font-weight-bol text-capitalize">${listings.seller.name}</span>
                        </div>
                    </a>
                    <p class="card-text"><small class="createdDate fs-6" style="color: #bac8d5;"></small></p>
                </div>
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <div style="max-width: 250px;"> 
                            <h5 class="card-title me-2 card-text-listings">${listings.title}</h5>
                        </div>
                        <div class="d-flex">
                            <p class="badge text-uppercase me-2 mb-2  bids-list-badge" style="max-height: 25px;"><span class="bids-list-text" style="color: #212529;">BIDS</span></p>
                            <span class=" fw-bolder">${listings._count.bids}</span>
                        </div>
                    </div>
                </div>
                <div class="card-footer mb-2">
                    <div class="d-flex justify-content-between align-items-center" style="flex-wrap: wrap;">
                        <a type="button" class="btn btn-outline-light mb-2"
                        href="/item.html?id=${listings.id}">View</a>   
                        <small class="fs-6 fw-bold endTimes" style="color: #bac8d5;"></small>
                    </div>
                </div>
            </div>
          </div>`;
}

/**
 * Template to render html listings with a function
 * @param {viewProfileWins} getting the html return from a function
 */

export function profilesTemplateWins(listings, parent) {
  parent.innerHTML += viewProfilesWins(listings);
}
