import { API_BASE_URL } from "./api/constants.mjs";
import { API_AUTH } from "./api/constants.mjs";
import { API_REGISTER } from "./api/constants.mjs";
import { registerFormHandler } from "./eventhandlers/registerForm.mjs";
import { loginFormHandler } from "./eventhandlers/loginForm.mjs";

const path = location.pathname;

if (path === "index.html") {
  //   loginFormHandler();
} else if (path === "/register/") {
  registerFormHandler();
}
