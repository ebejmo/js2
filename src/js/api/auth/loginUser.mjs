console.log(true);
import { API_BASE_URL, API_AUTH, API_LOGIN } from "../constants.mjs";
const API_KEY = "15068765-9d50-4895-b37f-8df955555c36";
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
    console.log("FROM USER LOGIN", result);

    if (response.ok) {
      const { accessToken, ...profileData } = result.data;
      localStorage.setItem("accessToken:", accessToken);
      localStorage.setItem("profile:", JSON.stringify(profileData));
      console.log("TOKEN: ", accessToken);
      console.log("PROFILEDATA: ", profileData);
      alert(`${profileData.name} is now logged in`);
      window.location.href = "/feed/posts/";
      return profile;
    } else {
      throw new Error("HELLO ERROR", result.message || response.statusText);
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
}

// const profile = JSON.parse(localStorage.getItem("profile"));
// console.log(profile);
