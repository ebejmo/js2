import { fetchData } from "../GET/fetchData.mjs";

export const queryString = document.location.search;
export const params = new URLSearchParams(queryString);
export const id = params.get("id");

export async function getPost(url) {
  try {
    const result = await fetchData(url);
    console.log("JSON/RESULT: ", result);
    return result;
  } catch (error) {
    console.log("ERROR FETCHING POST: ", error);
  }
}
