import { loginUser } from "../api/auth/loginUser.mjs";

export function loginFormHandler() {
  const form = document.querySelector("#loginForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const profile = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await loginUser(profile);

      console.log("Login response FORM:", response);
    } catch (error) {
      console.log("ERROR! Login failed", error);
    }
  });
}
