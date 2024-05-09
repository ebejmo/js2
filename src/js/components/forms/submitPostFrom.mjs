import { createPost } from "../../api/posts/createPost.mjs";

export async function handleSubmitCreatePostForm(event) {
  event.preventDefault();

  try {
    const formData = new FormData(event.target);
    const postData = {
      title: formData.get("title"),
      body: formData.get("body") || "",
    };

    const mediaURL = formData.get("banner");
    if (mediaURL) {
      postData.media = {
        url: mediaURL,
        alt: "Alt text",
      };
    }

    const tagsInput = formData.get("tags");
    if (tagsInput) {
      const tagsArray = tagsInput.split(",").map((tag) => tag.trim());
      postData.tags = tagsArray;
    }

    const response = await createPost(postData);
    if (response && response.statusCode === 400) {
      alert("Failed to create your post.");
    } else {
      alert("Post created!");
      window.location.href = "/pages/feed/posts/";
    }
  } catch (error) {
    console.log("ERROR FROM CREATE FORM: ", error);
  }
}
