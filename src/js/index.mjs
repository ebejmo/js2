import { API_BASE_URL, API_SOCIAL, POSTS } from "./api/constants.mjs";
import { registerFormHandler } from "./eventhandlers/registerForm.mjs";
import { loginFormHandler } from "./eventhandlers/loginForm.mjs";
import { getPosts } from "./api/posts/getPosts.mjs";

const path = location.pathname;

if (path === "/index.html") {
  loginFormHandler();
} else if (path === "/register/") {
  registerFormHandler();
} else if (path === "/feed/posts/") {
  getPosts(API_BASE_URL + API_SOCIAL + POSTS);
}
