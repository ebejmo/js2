import { toggleActionButton } from "../../eventhandlers/toggleActionButton.mjs";
import { requestsAPI } from "../headers/requestsAPI.mjs";
import { renderPost } from "./renderPost.mjs";

export const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get("id");

export async function getPost(url) {
  try {
    const result = await requestsAPI(url);
    console.log("JSON/RESULT: ", result);
    renderPost(result);
    const postAuthorEmail = result.data.author.email;
    toggleActionButton(postAuthorEmail, "#editBtn");
    toggleActionButton(postAuthorEmail, "#deleteBtn");
    return { result, postAuthorEmail };
  } catch (error) {
    console.log("ERROR FETCHING POST: ", error);
  }
}
