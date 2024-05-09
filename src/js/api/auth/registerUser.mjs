import { API_BASE_URL, API_AUTH, API_REGISTER } from "../constants.mjs";

const method = "POST";

export async function register(profile) {
  const registerURL = API_BASE_URL + API_AUTH + API_REGISTER;

  try {
    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body: JSON.stringify(profile),
    });

    const result = await response.json();

    const registrationMessage = document.querySelector("#registrationMessage");
    if (response.ok) {
      alert("You have successfully registered!");
      window.location.href = "/pages/login/";
    } else {
      registrationMessage.textContent =
        "Registration failed. Please try again later.";
      registrationMessage.classList.add("text-danger");
    }

    return result;
  } catch (error) {
    console.log("There is an error:", error);
  }
}
