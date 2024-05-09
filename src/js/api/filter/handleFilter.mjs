import { renderNoMatches } from "../../components/rendering/renderNoMatches.mjs";
import { renderPosts } from "../../components/rendering/renderPosts.mjs";
import {
  hideSpinner,
  showSpinner,
} from "../../components/spinners/spinners.mjs";
import { API_FULL_URL, DETAILS, noMatchTag } from "../constants.mjs";
import { requestsAPI } from "../headers/requestsAPI.mjs";
import { getPosts } from "../posts/getPosts.mjs";

function createFilterUrl(tag) {
  const encodedTag = encodeURIComponent(tag);
  const filterUrl = `${API_FULL_URL}?_tag=${encodedTag}&_author=true&_comments=true&_reactions=true`;
  return filterUrl;
}

/**
 * Handles the filtering of posts based on a provided tag input from a form event.
 *
 * @param {Event} event - The event object from a form submission event. The function prevents the default form submission behavior.
 *
 * The function reads a tag value from an input element with ID `#tagInput`, and if a tag is provided,
 * it creates a URL for filtering posts based on the tag. It then fetches the filtered posts using the URL
 * and renders the posts if there are matches, or shows a message if there are no matches.
 *
 * @throws {Error} - Throws an error if there is a network or other issue during the filtering process.
 *
 * @example
 * // Assuming you have an input element with ID `tagInput` and a form element that triggers handleFilter.
 * document.querySelector('#filterForm').addEventListener('submit', handleFilter);
 *
 * // When the form is submitted with a tag in the `#tagInput` input element, the handleFilter function
 * // will be triggered, filtering and rendering the posts based on the provided tag.
 */

export async function handleFilter(event) {
  event.preventDefault();

  const tagInput = document.querySelector("#tagInput");
  const tag = tagInput.value.trim();

  if (!tag) {
    await getPosts(API_FULL_URL + DETAILS);
    return;
  }

  const filterUrl = createFilterUrl(tag);

  try {
    showSpinner();
    const response = await requestsAPI(filterUrl);

    hideSpinner();
    if (response && response.data) {
      const content = response.data;
      const noMatches = response.data.length === 0;

      if (noMatches) {
        renderNoMatches(noMatchTag);
      } else {
        renderPosts(content);
      }
    }
  } catch (error) {
    console.log("Error during filter:", error);
  }
}
