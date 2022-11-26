
/**
 * making html as return from the function
 * @param {return} returning html post div 
*/

export function viewTemplate(listings) {
    return ` <div class="col">
    <div class="card shadow-sm">
        <div class="card-header d-flex justify-content-between">
            <div class="d-flex flex-row align-items-center">
                <div
                    class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                    <img src="${listings.seller.avatar}"  width="25" alt=""
                        class="rounded-circle profil-images-toppbar">
                </div>
                <span class="font-weight-bol">${listings.seller.name}</span>
            </div>
            <p class="card-text"><small class="text-muted">${listings.created}</small></p>
        </div>
        <div class="mt-1 text-center ">
            <p class="badge bg-dark">${listings.tags}</p>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide carousel-dark" data-bs-ride="true">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="${listings.media}" class="d-block w-100" alt="${listings.media}">
                </div>
            </div>
            <button class="carousel-control-prev" type="button"
                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button"
                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5 class="card-title">${listings.title}</h5>
                <div>
                    <p class="badge bg-warning" style="color: rgb(0, 0, 0);">Bids</p>
                    <span class="fw-bolder">${listings._count.bids}</span>
                </div>
            </div>
            <p class="card-text">${listings.description}
            </p>
            <p class="text-center fw-bolder">Allawi<span class="fw-normal"> have bid:100 </span></p>
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <button type="button" class="bidOn btn btn-outline-success"
                        data-bs-toggle="modal">Bid on item</button>
                </div>
                <small class="text-muted">ends ${listings.endsAt}</small>
            </div>
        </div>
    </div>
</div>`;
};

/**
 * Template to render html posts with forEach
 * @param {postsTemplate} getting the html return from a function
 * @param {forEach} render html posts with forEach
*/

export function renderTemplate(listings, parent) {
    listings.forEach((listings) => {
        parent.innerHTML += viewTemplate(listings);
    });
};