import { API_KEY } from "../constants.mjs";
import { load } from "../../storage/localStorage.mjs";

/**
 * Sends an API request to a specified URL with a given HTTP method and optional body data.
 *
 * @param {string} url - The URL to which the API request is sent.
 * @param {string} [method='GET'] - The HTTP method for the request (e.g., 'GET', 'POST', 'PUT', 'DELETE'). Defaults to 'GET'.
 * @param {Object} [bodyData=null] - The data to include in the request body (if applicable). This should be a JSON object.
 * @returns {Promise<Object>} - A promise that resolves to the parsed JSON response from the API.
 * @throws Will throw an error if the request fails or if the JSON response cannot be parsed.
 *
 * @example
 * // Assuming `load` function and `API_KEY` variable are already defined.
 * const url = 'https://api.example.com/posts';
 *
 * // Making a GET request to the specified URL.
 * requestsAPI(url)
 *   .then(data => {
 *     console.log('Received data:', data);
 *   })
 *   .catch(error => {
 *     console.error('Failed to fetch data:', error);
 *   });
 */

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
