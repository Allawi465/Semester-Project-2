/**
 * view listings html as return from the function
 * @param {return} returning html post div
 */

export function viewTemplate(listings) {
  return ` 
    <div class="col my-2">
        <div class="card shadow-sm bg-dark text-white shadow-lg p-3 mb-5 rounded me-3" style="border: none;">
            <div class="card-header d-flex justify-content-between" style="flex-wrap: wrap;">
                <a type="button" class="link-profile text-white" data-bs-toggle="modal" data-bs-target="#loginModel" href="/profiles.html?name=${listings.seller.name}" style="text-decoration: none";> 
                    <div class="d-flex flex-row align-items-center my-2" >
                        <div
                            class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                            <img src="${listings.seller.avatar}"  width="50" height="50" alt="profile avatar"
                                class="rounded-circle profile-images-topBar">
                        </div>
                        <span class="font-weight-bol text-capitalize">${listings.seller.name}</span>
                    </div>
                </a>
                <p class="card-text"><small class="created" style="color: #bac8d5;">${listings.created}</small></p>
            </div>
            <div class="img-container my-2 mx-2"> 
                <img src="${listings.media}" onerror="this.src='/images/default-upload-min.jpg' "alt="item image">
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div class="card-title text-break" style="max-width: 250px;"> 
                        <h5 class="card-title me-2 card-text-listings">${listings.title}</h5>
                    </div>
                    <div class="d-flex">
                        <p class="badge text-uppercase me-2 bids-list-badge" style="max-height: 25px;"><span class="bids-list-text" style="color: #212529;">BIDS</span></p>
                        <span class=" fw-bolder">${listings._count.bids}</span>
                    </div>
                </div>
            </div>
            <div class="card-footer mb-2">
                <div class="d-flex justify-content-between align-items-center" style="flex-wrap: wrap;">
                    <a type="button" class="btn btn-outline-light mb-2"
                    href="/item.html?id=${listings.id}">View</a>   
                    <small class="fs-6 text fw-bold" style="color: #bac8d5;">Ends ${listings.endsAt}</small>
                </div>
            </div>
        </div>
    </div>`;
}

/**
 * Template to render html listings with forEach
 * @param {viewTemplate} getting the html return from a function
 * @param {forEach} render viewTemplate listings with forEach
 */

export function renderTemplate(listings, parent) {
  listings.forEach((listings) => {
    parent.innerHTML += viewTemplate(listings);
  });
}
