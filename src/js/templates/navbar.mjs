import { load } from "../storage/index.mjs";

/**
 * getting the profile avatar from local storage 
 * @param {loadTheValue} getting the avatar value from loadTheValue function
 * @param {avatar} render the avatar value
*/

export function renderNavbarImage() {

    const { avatar, name, credits } = load("profile");
    const navbarImages = document.querySelector(".navbarImages");
    const navbarName = document.querySelector(".navbarName");
    const navbarCredit = document.querySelector(".navbarCredit");

    navbarImages.src = avatar;
    navbarName.innerHTML = name;
    navbarCredit.innerHTML = credits;
}