import { viewingAll } from "../../api/auction/view.mjs";
import * as templates from "../../templates/index.mjs";

export const containerViewLists = document.querySelector(".renderAuction");

/**
 * Getting posts from api call
 * @param {posts} getting posts
 * @param {filteredPosts} filtering the post
 * @param {renderPostsTemplate} temples for showing the posts
*/

export async function viewListings() {
    const listings = await viewingAll();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const sorterDate = listings.map(listing => {
        return {...listing, created: new Date(listing.created).toLocaleDateString('no-NO', options), endsAt: new Date(listing.endsAt).toLocaleDateString('no-NO', options)};
    });

    const filteredListings = sorterDate.filter((listing) => listing.title && listing.media && listing.tags && listing.media && listing.description); 

    console.log(filteredListings)

    templates.renderTemplate(filteredListings, containerViewLists);
};