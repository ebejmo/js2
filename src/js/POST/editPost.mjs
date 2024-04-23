import { API_BASE_URL, API_KEY, API_SOCIAL, POSTS } from "../api/constants.mjs";
import { requestsAPI } from "../api/headers/requestsAPI.mjs";
import { load } from "../storage/localStorage.mjs";

// export async function updatePost(postId, updatedPostData) {
//   const url = `${API_BASE_URL}${API_SOCIAL}${POSTS}/${postId}`;
//   console.log(url);
//   try {
//     const response = await requestsAPI(url, "PUT", updatedPostData);
//     console.log("RESPONSE FROM UPDATE PUT: ", response);
//     return response;
//   } catch (error) {
//     console.log("ERROR FROM UPDATE: ", error);
//     throw error;
//   }
// }
export async function editPost(postId, postData) {
  const url = `${API_BASE_URL}${API_SOCIAL}${POSTS}/${postId}`;
  const token = load("token");
  const editMessage = document.querySelector("#updateMessage");
  console.log(url);
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
      body: JSON.stringify(postData),
    });

    if (response.status === 200) {
      window.location.reload();
    } else {
      editMessage.textContent =
        "We failed to edit your post. Please try again later.";
      editMessage.classList.add("text-danger");
    }
  } catch (error) {
    console.log("ERROR FROM EDIT: ", error);
  }
}
