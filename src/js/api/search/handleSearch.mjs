import { API_BASE_URL, API_SOCIAL, POSTS } from "../constants.mjs";
import { requestsAPI } from "../headers/requestsAPI.mjs";
import { renderPosts } from "../posts/renderPosts.mjs";

export async function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.querySelector("input[type='search']");
  console.log(searchInput);
  const query = searchInput.value;

  const searchUrl = `${API_BASE_URL}${API_SOCIAL}${POSTS}/search?q=${encodeURIComponent(
    query
  )}`;
  try {
    const response = await requestsAPI(searchUrl);

    if (response) {
      console.log(response);
      renderPosts(response);
    }
  } catch (error) {
    console.log("Error during search:", error);
  }
}

document.querySelector("form").addEventListener("submit", handleSearch);
