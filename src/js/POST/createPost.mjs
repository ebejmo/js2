import { API_BASE_URL, API_SOCIAL, POSTS } from "../api/constants.mjs";
import { requestsAPI } from "../api/headers/requestsAPI.mjs";

export async function createPost(postData) {
  try {
    const url = API_BASE_URL + API_SOCIAL + POSTS;

    const response = await requestsAPI(url, "POST", postData);

    console.log("RESPONSE FROM CREATEPOST:", response);
    return response;
  } catch (error) {
    console.log("ERROR CREATING POST()", error);
    throw error;
  }
}
