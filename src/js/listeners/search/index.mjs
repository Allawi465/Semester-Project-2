import { errorMessage, viewingAll } from '../../api/auction/view.mjs';
import { options, optionsWithTime } from '../auction/viewById.mjs';
import * as templates from '../../templates/index.mjs';
import { containerViewLists, withBidsBtn, withNoBidsBtn } from '../index.mjs';
import { viewListings } from '../index.mjs';
const search = document.getElementById('searchInput');

/**
 * showing the posts by search
 * @param {searchValue} making all search value toLowerCase
 * @param {listings} getting all the listings
 * @param {filteredListings} filtering the listings
 * @param {filterListingsSearch} searching the listings by title, description or author name
 */

export function searchPosts() {
  search.addEventListener('keyup', async (event) => {
    const searchValue = event.target.value.toLowerCase();

    if (!searchValue) {
      containerViewLists.clear();
      errorMessage.style.display = 'none';
      viewListings();
      withNoBidsBtn.className = 'btn btn-primary mx-1 my-1';
      withNoBidsBtn.disabled = true;
      return;
    }

    if (searchValue.length < 4) {
      withBidsBtn.className = 'btn btn-outline-dark btn-sm mx-1 my-1';
      withNoBidsBtn.className = 'btn btn-outline-dark  mx-1 my-1';
      withNoBidsBtn.disabled = false;
      withBidsBtn.disabled = false;
      return;
    }

    const listings = await viewingAll();

    const sorterDate = listings.map((listing) => {
      return {
        ...listing,
        created: new Date(listing.created).toLocaleDateString('no-NO', options),
        endsAt: new Date(listing.endsAt).toLocaleDateString(
          'no-NO',
          optionsWithTime
        ),
      };
    });

    const filteredListings = sorterDate.filter(
      (listing) =>
        listing.seller.avatar &&
        listing.title &&
        listing.description &&
        listing.media
    );

    const filterListingsSearch = filteredListings.filter(
      (listings) =>
        listings.title.toLowerCase().includes(searchValue) ||
        listings.description.toLowerCase().includes(searchValue) ||
        listings.seller.name.toLowerCase().includes(searchValue)
    );

    if (filterListingsSearch.length > 0) {
      errorMessage.style.display = 'none';
      containerViewLists.clear();
      templates.renderTemplate(filterListingsSearch, containerViewLists);
    } else {
      errorMessage.innerHTML = 'No listings found';
      errorMessage.style.display = 'block';
      containerViewLists.clear();
    }
  });
}
