import { deletePost } from "../api/posts/deletePost.mjs";

export async function setupDeleteButton(postId) {
  const deleteBtn = document.querySelector("#deleteBtn");
  deleteBtn.addEventListener("click", () => {
    deletePost(postId);
  });
}
