import * as listener from "./listeners/index.mjs";

/**
 * router function with a switch statement
 * @param {path} getting location pathname to use in case 
 * @param {break} using break statement within a switch statement's
 * @param {default} using default to direct the use to login page 
*/

export default function router() {
    const path = location.pathname;

    switch (path) {
        case '/index.html':
            listener.viewListings();
            listener.authValidation();
            listener.logOut();
            listener.registerNewUsers();
            listener.loginUsers();
            break;
        default:
            location.href = "/index.html";
    }
};

router()