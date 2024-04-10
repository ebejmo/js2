import { API_KEY } from "../constants.mjs";
import { load } from "../../storage/localStorage.mjs";

export async function requestsAPI(url, method = "GET", bodyData = null) {
  try {
    const token = load("token");

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Noroff-API-Key": API_KEY,
    };

    const options = {
      method,
      headers,
    };

    if (bodyData) {
      options.body = JSON.stringify(bodyData);
    }

    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.log("ERROR FETCH DATA: ", error);
    throw error;
  }
}
