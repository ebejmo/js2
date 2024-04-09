import { fetchData } from "../GET/fetchData.mjs";
import { renderPosts } from "./renderPosts.mjs";

export async function getPosts(url) {
  try {
    const result = await fetchData(url);
    console.log("JSON/RESULT: ", result);
    renderPosts(result);
  } catch (error) {
    console.log("ERROR FROM GET POSTS: ", error);
  }
}
