import { API_BASE_URL } from "../constants.mjs";
import { API_AUTH } from "../constants.mjs";
import { API_REGISTER } from "../constants.mjs";

const method = "POST";

export async function register(profile) {
  const registerURL = API_BASE_URL + API_AUTH + API_REGISTER;

  const response = await fetch(registerURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const result = await response.json();
  console.log(result);
}
