import { handleSubmitCreatePostForm } from "../components/forms/submitPostFrom.mjs";

export function attachCreatePostFormListener() {
  const form = document.querySelector("#createPostForm");

  form.addEventListener("submit", handleSubmitCreatePostForm);
}
