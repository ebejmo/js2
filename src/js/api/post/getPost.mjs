import { API_KEY } from "../constants.mjs";
import { load } from "../../storage/localStorage.mjs";

const method = "GET";
export const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get("id");

export async function getPost(url) {
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
  } catch (error) {
    console.log("ERROR FETCHING POST:", error);
  }
}
