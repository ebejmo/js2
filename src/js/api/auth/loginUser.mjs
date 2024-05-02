import { API_BASE_URL, API_AUTH, API_LOGIN } from "../constants.mjs";
import { save } from "../../storage/localStorage.mjs";
const method = "POST";

/**
 * Logs in a user using the provided profile data and updates the application state with the user's token and profile information.
 *
 * @param {Object} profile - The profile object containing the login credentials. It should have the following properties:
 *  - `email` {string}: The user's email address.
 *  - `password` {string}: The user's password.
 *
 * @returns {Promise<Object|undefined>} - Returns a promise that resolves to the user's profile data if the login is successful. Otherwise, returns undefined if the login fails.
 *
 * @throws {Error} - Throws an error if the network request fails.
 *
 * @example
 * // Assuming `API_BASE_URL`, `API_AUTH`, `API_LOGIN`, and the `save` function are already defined.
 * const userProfile = {
 *   email: 'user@example.com',
 *   password: 'userpassword',
 * };
 *
 * // Call the function to log in the user
 * loginUser(userProfile)
 *   .then((profileData) => {
 *     if (profileData) {
 *       console.log('Login successful:', profileData);
 *     } else {
 *       console.log('Login failed. Please check the login credentials.');
 *     }
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred during login:', error);
 *   });
 */

export async function loginUser(profile) {
  const loginURL = API_BASE_URL + API_AUTH + API_LOGIN;

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    });

    const result = await response.json();

    const loginMessage = document.querySelector("#loginMessage");
    if (response.ok) {
      const { accessToken, ...profileData } = result.data;
      save("token", accessToken);
      save("profile", profileData);
      console.log(profileData);
      alert(`${profileData.name} is now logged in`);
      window.location.href = "/feed/posts/";
      return profileData;
    } else {
      loginMessage.textContent = "Login failed. Please try again later.";
      loginMessage.classList.add("text-danger");
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
}
