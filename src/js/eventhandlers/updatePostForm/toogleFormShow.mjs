export function toggleFormShow() {
  const editBtn = document.querySelector("#editBtn");
  const updatePostForm = document.querySelector("#updatePostForm");

  editBtn.addEventListener("click", () => {
    updatePostForm.classList.toggle("hidden");
  });
}
