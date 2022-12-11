export function viewTemplate(listings) {
  return `  
    <div class="col mx-4">
        <div class="card shadow-sm bg-dark text-white">
            <div class="card-header bg-dark text-white d-flex justify-content-between" style="border: none;">
                <div class="d-flex flex-row align-items-center">
                    <div class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                        <img src="${listings.seller.avatar}"  width="50" height="50" alt=""
                        class="rounded-circle profile-images-topBar">
                    </div>
                    <span class="font-weight-bol text-capitalize">${listings.seller.name}</span>
                </div>
               <p class="card-text"><small class="text-muted created"></small></p>
            </div>
            <div class="d-flex justify-content-between mt-2 mb-2 mx-3 tags">
                <strong class="mb-2 text-capitalize">Tags</strong>
                <div class="d-flex flex-row tags-container" style="flex-wrap: wrap";> 

               </div>
            </div>
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
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
                <div class="card-description"> 
                    <h5>${listings.title}</h5>
                </div>
                <div class="card-description"> 
                    <p class="card-text">${listings.description}</p>
                </div>
                <div> 
                    <div class="text-center mt-5">
                        <p class="badge bg-warning text-uppercase" style="color: rgb(0, 0, 0);">Bids</p>
                        <span class="fw-bolder">${listings._count.bids}</span>
                    </div>   
                    <ol class="list-group list-group-numbered bidList mb-4 bg-light">
                        
                    </ol>
                </div>
                    
            </div>
            <div class="card-footer mb-2" style="border: none;">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <button type="button" id="bidOn" class="btn btn-success text-uppercase"
                            data-bs-toggle="modal" data-id="${listings.id}" data-bs-target="#loginModel">Bid now
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
