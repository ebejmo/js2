import { register } from "../api/auth/registerUser.mjs";

export function registerFormHandler() {
  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const profile = {};

    profile.name = formData.get("name");
    profile.email = formData.get("email");
    profile.password = formData.get("password");

    const avatar = formData.get("avatar");
    if (avatar) {
      profile.avatar = avatar;
    }

    const banner = formData.get("banner");
    if (banner) {
      profile.banner = banner;
    }

    const bio = formData.get("bio");
    if (bio) {
      profile.bio = bio;
    }

    try {
      await register(profile);
      console.log(profile);
      if (Response.status === "success") {
        registrationMessage.textContent = "Registration successful!";
        registrationMessage.classList.remove("text-danger");
        registrationMessage.classList.add("text-success");
      } else {
        registrationMessage.textContent =
          "Registration failed. Please try again later.";
        registrationMessage.classList.remove("text-success");
        registrationMessage.classList.add("text-danger");
      }
    } catch (error) {
      console.error("Reg failed: ", error);
    }
  });
}
