/**
 * view by id listings html as return from the function
 * @param {return} returning html post div
 */

export function viewTemplate(listings) {
  return `  
    <div class="col mx-4">
        <div class="card shadow-sm bg-dark text-white" style="border: none;">
            <div class="card-header bg-dark text-white d-flex justify-content-between" style="flex-wrap: wrap;">
                <a type="button" class="link-profile text-white" data-bs-toggle="modal" data-bs-target="#loginModel" href="/noxb/profiles/?name=${listings.seller.name}" style="text-decoration: none";> 
                    <div class="d-flex flex-row align-items-center" >
                        <div
                            class="rounded-circle overflow-hidden d-flex justify-content-center align-item-center me-2">
                            <img src="${listings.seller.avatar}"  width="50" height="50" alt="profile avatar"
                                class="rounded-circle profile-images-topBar">
                        </div>
                        <span class="font-weight-bol text-capitalize">${listings.seller.name}</span>
                    </div>
                </a>
            <p class="card-text"><small class="created fs-6" style="color: #bac8d5;"></small></p>
            </div>
            <div class="d-flex justify-content-between mt-2 mb-2 mx-3 tags">
                <strong class="mb-2 text-capitalize">Tags</strong>
                <div class="d-flex flex-row tags-container" style="flex-wrap: wrap;"> 

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
                <div class="d-flex justify-content-between" style="min-height: 50px;"> 
                    <h5 class="card-title text-break me-2" style="max-width: 750px;">${listings.title}</h5>
                    <div>
                        <span class="fw-bolder fs-5 text current-price" style="color: #2ac77e;"></span>
                    </div>  
                </div>
                <div style="min-height: 50px;"> 
                    <p class="card-text card-description">${listings.description}</p>
                </div>
                <div> 
                    <div class="text-center mt-5">
                        <p class="badge text-uppercase fs-6 bids-list-badge" style="color: #212529;">Bids</p>
                        <span class="fs-5 text bids-list-number">${listings._count.bids}</span>
                    </div>   
                    <ol class="list-group list-group-numbered bidList mb-4 bg-light">
                        
                    </ol>
                </div>
                    
            </div>
            <div class="card-footer mb-2" style="border: none;">
                <div class="d-flex justify-content-between align-items-center" style="flex-wrap: wrap;">
                    <div>
                        <button type="button" id="bidOn" class="btn text-uppercase me-2"
                            data-bs-toggle="modal" data-id="${listings.id}" data-bs-target="#loginModel">Bid now
                        </button>
                    </div>
                    <small class="fs-6 fw-bold endTime" style="color: #bac8d5;"></small>
                </div>
            </div>
        </div>
    </div>`;
}

/**
 * Template to render html listings with a function
 * @param {viewTemplate} getting the html return from a function
 */

export function renderPostById(listings, parent) {
  parent.innerHTML += viewTemplate(listings);
}
