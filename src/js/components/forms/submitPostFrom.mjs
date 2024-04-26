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

    const response = await createPost(postData);
    console.log("RESPONSE FROM FORM", response);
  } catch (error) {
    console.log("ERROR FROM CREATE FORM: ", error);
  }
}
