export function toggleCreateFormShow() {
  const toggleFormBtn = document.querySelector("#toggleFormBtn");
  const createPostForm = document.querySelector("#createPostForm");

  createPostForm.classList.add("d-none", "d-lg-block");
  toggleFormBtn.classList.add("d-lg-none");

  toggleFormBtn.addEventListener("click", () => {
    createPostForm.classList.toggle("d-none");

    if (createPostForm.classList.contains("d-none")) {
      toggleFormBtn.textContent = "Click here to create a post";
    } else {
      toggleFormBtn.textContent = "Hide form";
    }
  });
}
