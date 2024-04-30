import { API_FULL_URL, DETAILS, noMatchSearch } from "../constants.mjs";
import { requestsAPI } from "../headers/requestsAPI.mjs";
import { getPosts } from "../posts/getPosts.mjs";
import { renderPosts } from "../../components/rendering/renderPosts.mjs";
import { renderNoMatches } from "../../components/rendering/renderNoMatches.mjs";

function createSearchUrl(query) {
  const encodedQuery = encodeURIComponent(query);
  const searchUrl = `${API_FULL_URL}/search?q=${encodedQuery}&_author=true&_comments=true&_reactions=true`;
  return searchUrl;
}

export async function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.querySelector("#search");
  const query = searchInput.value.trim();

  if (!query) {
    await getPosts(API_FULL_URL + DETAILS);
    return;
  }

  const searchUrl = createSearchUrl(query);

  try {
    const response = await requestsAPI(searchUrl);

    if (response && response.data) {
      const content = response.data;
      const noMatches = response.data.length === 0;

      if (noMatches) {
        renderNoMatches(noMatchSearch);
      } else {
        renderPosts(content);
      }
    }
  } catch (error) {
    console.log(("Error during search:", error));
  }
}
