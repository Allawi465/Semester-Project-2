import * as localStorage from "../storage/index.mjs";
import * as dropdown from "../templates/navbar.mjs";
import * as templates from "../templates/index.mjs";
const profileDropdown = document.getElementById("profileDropdown");

const signInBtn = document.getElementById("signInBtn");


export function authValidation() {
    // const bidOnBtn = document.querySelectorAll(".bidOn"); 
    const token = localStorage.load("token");
    profileDropdown.style.display = "none";
    profileDropdown.style.display = "none";     
    if (token) {
        profileDropdown.style.display = "block";
        dropdown.renderNavbarImage();
        // bidOnBtn.dataset.bsTarget = "#bidModel";
    
    } else {
        signInBtn.style.display = "block";
        // bidOnBtn.dataset.bsTarget = "#loginModel";
    }
};