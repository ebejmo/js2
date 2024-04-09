export function renderPosts(content) {
  const postsContainer = document.querySelector("#posts");

  content.data.forEach(({ id, title, body, media }) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = title;

    const bodyElement = document.createElement("p");
    bodyElement.textContent = body;

    const idElement = document.createElement("p");
    idElement.textContent = `ID: ${id}`;

    const imageElement = document.createElement("img");
    if (media) {
      const { url, alt } = media;
      imageElement.src = url;
      imageElement.alt = alt;
    }

    postElement.appendChild(titleElement);
    postElement.appendChild(bodyElement);
    postElement.appendChild(idElement);
    if (media) {
      postElement.appendChild(imageElement);
    }

    postsContainer.appendChild(postElement);
  });
}
