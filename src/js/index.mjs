import { DETAILS, API_FULL_URL, apiCallGoneWrong } from "./api/constants.mjs";
import { registerFormHandler } from "./components/forms/registerForm.mjs";
import { loginFormHandler } from "./components/forms/loginForm.mjs";
import { getPosts } from "./api/posts/getPosts.mjs";
import { getPost, id } from "./api/posts/getPost.mjs";
import { attachCreatePostFormListener } from "./handlers/attachCreatePostFormListener.mjs";
import { toggleFormShow } from "./handlers/toggleFormShow.mjs";
import { setupDeleteButton } from "./handlers/setupDelete.mjs";
import { configurePostEditHandler } from "./components/forms/configurePost.mjs";
import { setupSearchForm } from "./api/search/setupSearch.mjs";
import { setupFilterForm } from "./api/filter/setupFilter.mjs";
import { toggleCreateFormShow } from "./handlers/toggleCreateFormShow.mjs";
import { hideSpinner, showSpinner } from "./components/spinners/spinners.mjs";
import { renderNoMatches } from "./components/rendering/renderNoMatches.mjs";

const path = location.pathname;

if (path === "/pages/login/") {
  loginFormHandler();
} else if (path === "/pages/register/") {
  registerFormHandler();
} else if (path === "/pages/feed/posts/") {
  try {
    showSpinner();
    await getPosts(API_FULL_URL + DETAILS);
    hideSpinner();
    attachCreatePostFormListener();
    toggleCreateFormShow();
    setupSearchForm();
    setupFilterForm();
  } catch (error) {
    hideSpinner();
    renderNoMatches(apiCallGoneWrong);
  }
} else if (path === "/pages/feed/post/") {
  try {
    showSpinner();
    const { postId, postData: oldPostData } = await getPost(
      `${API_FULL_URL}/${id}${DETAILS}`
    );
    setupDeleteButton(postId);
    configurePostEditHandler(postId, oldPostData);
    toggleFormShow();
    hideSpinner();
  } catch (error) {
    hideSpinner();
    renderNoMatches(apiCallGoneWrong);
  }
}
