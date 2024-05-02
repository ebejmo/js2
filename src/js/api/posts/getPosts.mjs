import { requestsAPI } from "../headers/requestsAPI.mjs";
import { renderPosts } from "../../components/rendering/renderPosts.mjs";

/**
 * Fetches posts from a specified URL using the `requestsAPI` function and renders them.
 *
 * @param {string} url - The URL from which to fetch posts.
 * @throws Will throw an error if the request fails.
 * @returns {Promise<void>} - A promise that resolves when the posts are fetched and rendered.
 *
 * @example
 * // Assuming `requestsAPI` and `renderPosts` are already defined.
 * const url = 'https://api.example.com/posts';
 *
 * // Call `getPosts` to fetch and render posts from the given URL.
 * getPosts(url)
 *   .then(() => {
 *     console.log('Posts fetched and rendered successfully.');
 *   })
 *   .catch(error => {
 *     console.error('Failed to fetch and render posts:', error);
 *   });
 */

export async function getPosts(url) {
  try {
    const result = await requestsAPI(url);

    const allPosts = result.data;
    renderPosts(allPosts);
  } catch (error) {
    console.log("ERROR FROM GET POSTS: ", error);
    throw error;
  }
}
