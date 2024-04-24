import { DETAILS, API_FULL_URL } from "./api/constants.mjs";
import { registerFormHandler } from "./eventhandlers/registerForm.mjs";
import { loginFormHandler } from "./eventhandlers/loginForm.mjs";
import { getPosts } from "./api/posts/getPosts.mjs";
import { getPost, id } from "./api/post/getPost.mjs";
import { attachCreatePostFormListener } from "./eventhandlers/attachCreatePostFormListener.mjs";
import { toggleFormShow } from "./eventhandlers/updatePostForm/toogleFormShow.mjs";
import { setupDeleteButton } from "./delete/setupDelete.mjs";
import { setupEditButton } from "./eventhandlers/updatePostForm/setupEdit.mjs";
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
  setupEditButton(postId, oldPostData);
  toggleFormShow();
}
