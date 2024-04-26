import { DETAILS, API_FULL_URL } from "./api/constants.mjs";
import { registerFormHandler } from "./components/forms/registerForm.mjs";
import { loginFormHandler } from "./components/forms/loginForm.mjs";
import { getPosts } from "./api/posts/getPosts.mjs";
import { getPost, id } from "./api/posts/getPost.mjs";
import { attachCreatePostFormListener } from "./handlers/attachCreatePostFormListener.mjs";
import { toggleFormShow } from "./handlers/toggleFormShow.mjs";
import { setupDeleteButton } from "./handlers/setupDelete.mjs";
import { configurePostEditHandler } from "./components/forms/configurePost.mjs";
import { setupSearchForm } from "./api/search/setupSearch.mjs";

const path = location.pathname;

if (path === "/index.html") {
  loginFormHandler();
} else if (path === "/register/") {
  registerFormHandler();
} else if (path === "/feed/posts/") {
  await getPosts(API_FULL_URL + DETAILS);
  attachCreatePostFormListener();
  setupSearchForm();
} else if (path === "/feed/posts/post/") {
  const { postId, postData: oldPostData } = await getPost(
    `${API_FULL_URL}/${id}${DETAILS}`
  );
  setupDeleteButton(postId);
  configurePostEditHandler(postId, oldPostData);
  toggleFormShow();
}
