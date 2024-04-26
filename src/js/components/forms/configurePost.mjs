import { editPost } from "../../api/posts/editPost.mjs";

export async function configurePostEditHandler(postId, oldPostData) {
  const updateBtn = document.querySelector("#updateBtn");
  const updatePostForm = document.querySelector("#updatePostForm");
  const editMessage = document.querySelector("#updateMessage");

  updateBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const titleInput = updatePostForm.querySelector("#updateTitle").value;
    const bodyInput = updatePostForm.querySelector("#bodyText").value;
    const bannerInput = updatePostForm.querySelector("#updateBanner").value;
    const tagsInput = updatePostForm.querySelector("#updateTags").value;

    if (!titleInput) {
      editMessage.textContent = "Title is required to update the post.";
      editMessage.classList.add("text-danger");
      return;
    }

    const postData = {
      title: titleInput,
    };

    if (bodyInput) {
      postData.body = bodyInput;
    } else {
      postData.body = oldPostData.body || "";
    }

    if (bannerInput) {
      postData.media = {
        url: bannerInput,
        alt: "Alt text",
      };
    } else {
      if (oldPostData.media) {
        postData.media = oldPostData.media;
      }
    }

    if (tagsInput) {
      const tagsArray = tagsInput.split(",").map((tag) => tag.trim());
      postData.tags = tagsArray;
    } else {
      postData.tags = oldPostData.tags || [];
    }

    try {
      await editPost(postId, postData);
    } catch (error) {
      console.log("Error updating post:", error);
    }
  });
}
