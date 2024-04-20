import { API_BASE_URL, API_KEY, API_SOCIAL, POSTS } from "../api/constants.mjs";
import { requestsAPI } from "../api/headers/requestsAPI.mjs";
import { load } from "../storage/localStorage.mjs";

// export async function deletePost(id) {
//   console.log("deletePost function called with postID:", postID);
//   const url = `${API_BASE_URL}${API_SOCIAL}${POSTS}/${id}`;

//   try {
//     const response = await requestsAPI(url, "DELETE");
//     console.log("DELETE RESPONSE", response);

//     if (response.status === 204) {
//       console.log("POST deleted!! Good job");
//     } else {
//       console.error("Unexpected response status:", response.status);
//     }
//   } catch (error) {
//     console.log("DELETE FAILED", error);
//   }
// }

export async function deletePost(postID) {
  const url = `${API_BASE_URL}${API_SOCIAL}${POSTS}/${postID}`;
  const token = load("token");
  try {
    // Send DELETE request to the API
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    // Check the response status
    if (response.status === 204) {
      console.log("Post deleted successfully!");
    } else {
      console.error(`Failed to delete post. Status code: ${response.status}`);
    }
  } catch (error) {
    console.error("DELETE request failed with error:", error);
  }
}
