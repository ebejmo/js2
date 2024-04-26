import { API_BASE_URL, API_SOCIAL, POSTS } from "../constants.mjs";
import { requestsAPI } from "../headers/requestsAPI.mjs";

export async function createPost(postData) {
  try {
    const url = API_BASE_URL + API_SOCIAL + POSTS;

    const response = await requestsAPI(url, "POST", postData);

    return response;
  } catch (error) {
    console.log("ERROR CREATING POST()", error);
    throw error;
  }
}
