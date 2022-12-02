/**
 * making html as return from the function
 * @param {return} returning html post div
 */

export function viewTemplate(listings) {
  return ` 
    <div class="col">
        <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div
                        class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                        <img src="${listings.avatar}"  width="25" height="25" alt=""
                            class="rounded-circle profile-images-topBar">
                    </div>
                    <span class="font-weight-bol">${listings.name}</span>
                </div>
                <p class="card-text"><small class="text-muted">${listings.created}</small></p>
            </div>
            <div class="d-flex justify-content-between mt-2 mb-2 mx-2">
                <strong>Tags:</strong>
                <p class="badge bg-dark tags">${listings.tags}</p>
            </div>
            <div class="img-container"> 
                <img src="${listings.media}" alt="">
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                <div class="card-title"> 
                <h5 class="card-title">${listings.title}</h5>
                </div>
                    <div>
                        <p class="badge bg-warning" style="color: rgb(0, 0, 0);">Bids</p>
                        <span class="fw-bolder">${listings._count}</span>
                    </div>
                </div>
                <strong>Description:</strong>
                <div class="card-description"> 
                    <p class="card-text">${listings.description}</p>
                </div>
                <div class="bidList my-4">
                    <p class="text-center fw-bolder">${listings.lastBidder.bidderName}<span class="fw-normal"> have bid:</span><span class="fw-normal fw-bolder"> ${listings.lastBidder.amount}</span></p>
                </div>
            <div class="card-footer mb-2">
                <div class="d-flex justify-content-between align-items-center">
                <div>
                <a type="button" class="btn btn-outline-dark"
                href="/NOxB/auction/item/?id=${listings.id}">View</a>

                <button type="button" id="bidOn" class="btn btn-outline-success"
                    data-bs-toggle="modal" data-id="${listings.id}" data-bs-target="#loginModel">Bid</button>
                </div>
                    <small class="text-muted">Ends ${listings.endsAt}</small>
                </div>
            </div>
        </div>
    </div>`;
}

export function templateNoBids(listings) {
  return ` 
    <div class="col">
        <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div
                        class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                        <img src="${listings.seller.avatar}"  width="25" height="25" alt=""
                            class="rounded-circle profile-images-topBar">
                    </div>
                    <span class="font-weight-bol">${listings.seller.name}</span>
                </div>
                <p class="card-text"><small class="text-muted">${listings.created}</small></p>
            </div>
            <div class="d-flex justify-content-between mt-2 mb-2 mx-2">
                <strong>Tags:</strong>
                <p class="badge bg-dark tags">${listings.tags}</p>
            </div>
            <div class="img-container"> 
                <img src="${listings.media}" alt="">
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                <div class="card-title"> 
                <h5 class="card-title">${listings.title}</h5>
                </div>
                    <div>
                        <p class="badge bg-warning" style="color: rgb(0, 0, 0);">Bids</p>
                        <span class="fw-bolder">${listings._count.bids}</span>
                    </div>
                </div>
                <strong>Description:</strong>
                <div class="card-description"> 
                    <p class="card-text">${listings.description}</p>
                </div>
                <div class="bidList my-4">
                  
                </div>
            <div class="card-footer mb-2">
                <div class="d-flex justify-content-between align-items-center">
                <div>
                <a type="button" class="btn btn-outline-dark"
                href="/NOxB/auction/item/?id=${listings.id}">View</a>
                <button type="button" id="bidOn" class="btn btn-outline-success"
                    data-bs-toggle="modal" data-id="${listings.id}" data-bs-target="#loginModel">Bid</button>
                </div>
                    <small class="text-muted">Ends ${listings.endsAt}</small>
                </div>
            </div>
        </div>
    </div>`;
}

/**
 * Template to render html posts with forEach
 * @param {postsTemplate} getting the html return from a function
 * @param {forEach} render html posts with forEach
 */

export function renderTemplate(listings, parent) {
  listings.forEach((listings) => {
    parent.innerHTML += viewTemplate(listings);
  });
}

export function templatesNoBids(listings, parent) {
  listings.forEach((listings) => {
    parent.innerHTML += templateNoBids(listings);
  });
}
