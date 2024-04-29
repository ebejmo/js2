import { toggleActionButton } from "../../handlers/toggleActionButton.mjs";
import { requestsAPI } from "../headers/requestsAPI.mjs";
import { renderPost } from "../../components/rendering/renderPost.mjs";

export const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get("id");

export async function getPost(url) {
  try {
    const result = await requestsAPI(url);
    const postData = result.data;
    const postId = postData.id;
    const postAuthorEmail = postData.author.email;
    const userName = postData.author.name;

    renderPost(postData, userName, postAuthorEmail);
    toggleActionButton(postAuthorEmail, "#editBtn");
    toggleActionButton(postAuthorEmail, "#deleteBtn");

    return { postData, postId, postAuthorEmail, userName };
  } catch (error) {
    console.log("ERROR FETCHING POST: ", error);
  }
}
