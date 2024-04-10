import { handleSubmitCreatePostForm } from "./createForms/submitPostFrom.mjs";

export function attachCreatePostFormListener() {
  const form = document.querySelector("#createPostForm");

  form.addEventListener("submit", handleSubmitCreatePostForm);
}
