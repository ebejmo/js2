import { API_BASE_URL, API_SOCIAL, POSTS } from "../api/constants.mjs";
import { requestsAPI } from "../api/headers/requestsAPI.mjs";

export async function updatePost(postId, updatedPostData) {
  const url = `${API_BASE_URL}${API_SOCIAL}${POSTS}/${postId}`;
  console.log(url);
  try {
    const response = await requestsAPI(url, "PUT", updatedPostData);
    console.log("RESPONSE FROM UPDATE PUT: ", response);
    return response;
  } catch (error) {
    console.log("ERROR FROM UPDATE: ", error);
    throw error;
  }
}
