export function viewTemplate(listings) {
  return `  
    <div class="col mx-4">
        <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between">
                <div class="d-flex flex-row align-items-center">
                    <div
                        class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                        <img src="${listings.seller.avatar}"  width="25" height="25" alt=""
                            class="rounded-circle profil-images-toppbar">
                    </div>
                    <span class="font-weight-bol">${listings.seller.name}</span>
                </div>
                <p class="card-text"><small class="text-muted createdTime"></small></p>
            </div>
            <div class="d-flex justify-content-between mt-2 mb-2 mx-2">
                <strong>Tags:</strong>
                <div class="d-flex flex-row tags-container"> 

               </div>
            </div>
            <div id="carouselExampleControlsNoTouching" class="carousel slide carousel-dark" data-bs-touch="false">
                <div class="carousel-inner">
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
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
                    <div> 
                        <p class="card-text">${listings.description}</p>
                    </div>
                    <div class="bidList id="bidder" my-4">
                        
                    </div>
                </div>
            <div class="card-footer mb-2">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <button type="button" id="bidOn" class="btn btn-outline-success"
                            data-bs-toggle="modal" data-id="${listings.id}" data-bs-target="#loginModel">Bid
                        </button>
                    </div>
                    <small class="text-muted endTime"></small>
                </div>
            </div>
        </div>
    </div>`;
}

export function renderPostById(listings, parent) {
  parent.innerHTML += viewTemplate(listings);
}
