import { API_FULL_URL } from "../constants.mjs";
import { requestsAPI } from "../headers/requestsAPI.mjs";
import { getPosts } from "../posts/getPosts.mjs";
import { renderPosts } from "../../components/rendering/renderPosts.mjs";

export async function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.querySelector("#search");
  const query = searchInput.value.trim();

  if (!query) {
    await getPosts(API_FULL_URL);
    return;
  }
  const searchUrl = `${API_FULL_URL}/search?q=${encodeURIComponent(query)}`;

  try {
    const response = await requestsAPI(searchUrl);
    if (response && response.data) {
      console.log("RESPONSE", response);
      renderPosts(response.data);
    }
  } catch (error) {
    console.log("Error during search:", error);
  }
}
