import { requestsAPI } from "../headers/requestsAPI.mjs";
import { renderPosts } from "../../components/rendering/renderPosts.mjs";

export async function getPosts(url) {
  try {
    const result = await requestsAPI(url);

    const allPosts = result.data;
    renderPosts(allPosts);
  } catch (error) {
    console.log("ERROR FROM GET POSTS: ", error);
  }
}
