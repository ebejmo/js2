import { API_KEY } from "../constants.mjs";
import { load } from "../../storage/localStorage.mjs";

export async function fetchData(url) {
  const method = "GET";
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
    return await response.json();
  } catch (error) {
    console.log("ERROR FETCH DATA: ", error);
    throw error;
  }
}
