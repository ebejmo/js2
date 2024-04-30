import { renderNoMatches } from "../../components/rendering/renderNoMatches.mjs";
import { renderPosts } from "../../components/rendering/renderPosts.mjs";
import { API_FULL_URL, DETAILS, noMatchTag } from "../constants.mjs";
import { requestsAPI } from "../headers/requestsAPI.mjs";
import { getPosts } from "../posts/getPosts.mjs";

function createFilterUrl(tag) {
  const encodedTag = encodeURIComponent(tag);
  const filterUrl = `${API_FULL_URL}?_tag=${encodedTag}&_author=true&_comments=true&_reactions=true`;
  return filterUrl;
}

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
    const response = await requestsAPI(filterUrl);

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
