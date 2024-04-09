import { API_KEY } from "../constants.mjs";
import { load } from "../../storage/localStorage.mjs";
import { renderPosts } from "./renderPosts.mjs";

const method = "GET";

export async function getPosts(url) {
  try {
    const token = load("token");

    const getData = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-Noroff-API-Key": API_KEY,
      },
      method,
    };
    const response = await fetch(url, getData);
    const result = await response.json();
    console.log("JSON/RESULT: ", result);

    renderPosts(result);
  } catch (error) {
    console.log("ERROR:", error);
  }
}
