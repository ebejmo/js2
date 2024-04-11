import { API_BASE_URL, API_AUTH, API_LOGIN } from "../constants.mjs";
import { save } from "../../storage/localStorage.mjs";

const method = "POST";

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
