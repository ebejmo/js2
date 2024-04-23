import { API_BASE_URL, API_SOCIAL, DETAILS, POSTS } from "./api/constants.mjs";
import { registerFormHandler } from "./eventhandlers/registerForm.mjs";
import { loginFormHandler } from "./eventhandlers/loginForm.mjs";
import { getPosts } from "./api/posts/getPosts.mjs";
import { getPost, id } from "./api/post/getPost.mjs";
import { attachCreatePostFormListener } from "./eventhandlers/attachCreatePostFormListener.mjs";
import { toggleFormShow } from "./eventhandlers/updatePostForm/toogleFormShow.mjs";
import { setupDeleteButton } from "./delete/setupDelete.mjs";
import { setupEditButton } from "./eventhandlers/updatePostForm/setupEdit.mjs";

const path = location.pathname;
const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

if (path === "/index.html") {
  loginFormHandler();
} else if (path === "/register/") {
  registerFormHandler();
} else if (path === "/feed/posts/") {
  await getPosts(API_BASE_URL + API_SOCIAL + POSTS + DETAILS);
  attachCreatePostFormListener();
} else if (path === "/feed/posts/post/") {
  const { postId, postData: oldPostData } = await getPost(
    `${API_BASE_URL}${API_SOCIAL}${POSTS}/${id}${DETAILS}`
  );
  setupDeleteButton(postId);
  setupEditButton(postId, oldPostData);
  toggleFormShow();
}
