import { editPost } from "../../POST/editPost.mjs";

export async function setupEditButton(postId, oldPostData) {
  const updateBtn = document.querySelector("#updateBtn");
  const updatePostForm = document.querySelector("#updatePostForm");
  const editMessage = document.querySelector("#updateMessage");

  updateBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const titleInput = updatePostForm.querySelector("#updateTitle").value;
    const bodyInput = updatePostForm.querySelector("#bodyText").value;
    const bannerInput = updatePostForm.querySelector("#updateBanner").value;

    if (!titleInput) {
      editMessage.textContent = "Title is required to update the post.";
      editMessage.classList.add("text-danger");
      return;
    }

    const postData = {
      title: titleInput,
      body: bodyInput || oldPostData.body,
      media: {
        url: bannerInput || (oldPostData.media ? oldPostData.media.url : ""),
      },
    };

    try {
      await editPost(postId, postData);
    } catch (error) {
      console.log("Error updating post:", error);
    }
  });
}
