import { API_SOCIAL_URL } from "../constants.mjs";
import { fetchWToken } from "../headers.mjs";

const path = "/listings";
const method = "Get";

/**
 * view posts content with api get method  
 * @param {get} get posts content 
 * @param {fetchWToken} token from a function
*/

export async function viewingAll(listings) {
    try {
        const getPostUrl = `${API_SOCIAL_URL}${path}?_seller=true&_bids=true`;
        const response = await fetchWToken(getPostUrl, {
            headers: {
                "Content-Type": "application/json", 
            },
            method,
        })

        return await response.json();
    
        /* return await response.json(); */
    } catch (error) {
     /*    message.innerHTML = `<p>we are aware of the issues with accessing NOxB. our team is actively working on it</p>`; */
    }
};

viewingAll()