/**
 * Renders a list of posts in a specified content container.
 *
 * @param {Array} content - Array of post objects to render. Each object should contain the properties:
 *  - `id` {string}: The unique identifier for the post.
 *  - `title` {string}: The title of the post.
 *  - `body` {string}: The body content of the post.
 *  - `media` {Object|null}: The media object containing the URL and alt text for the post image (if any).
 *  - `tags` {Array<string>|null}: An array of tags associated with the post.
 *  - `author` {Object}: The author object containing the author's name.
 *
 * The function dynamically creates HTML elements to display each post within a card layout.
 * Existing content in the container is cleared before rendering the new content.
 *
 * @example
 * // Assuming you have an array of post objects called `postsArray` and the necessary HTML structure.
 * const postsArray = [
 *   {
 *     id: 'post1',
 *     title: 'Post Title',
 *     body: 'This is the body of the post.',
 *     media: {
 *       url: 'https://example.com/image.jpg',
 *       alt: 'Post image',
 *     },
 *     tags: ['tag1', 'tag2'],
 *     author: {
 *       name: 'authorName',
 *     },
 *   },
 *   // Additional post objects...
 * ];
 * // The function will create and insert post cards in the container with ID 'content'.
 */

export function renderPosts(content) {
  const contentContainer = document.querySelector("#content");

  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  content.forEach(({ id, title, body, media, tags, author }) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card", "mb-3", "h-100");
    cardContainer.id = id;

    const row = document.createElement("div");
    row.classList.add("row", "g-0");
    cardContainer.appendChild(row);

    const imgContainer = document.createElement("div");
    imgContainer.classList.add(
      "d-none",
      "d-sm-block",
      "col-4",
      "col-md-3",
      "col-lg-4",
      "h-100"
    );
    row.appendChild(imgContainer);

    const img = document.createElement("img");
    img.classList.add("img-fluid", "w-100", "h-100");
    img.src = media
      ? media.url
      : "https://placehold.co/400?text=Noroff+Social&font=roboto";
    img.alt = media ? media.alt : "Placeholder image";
    imgContainer.appendChild(img);

    const textContainer = document.createElement("div");
    textContainer.classList.add("col-12", "col-sm-8", "col-md-9", "col-lg-8");
    row.appendChild(textContainer);

    const header = document.createElement("h5");
    header.classList.add("card-header");
    header.textContent = title;
    textContainer.appendChild(header);

    const bodyContainer = document.createElement("div");
    bodyContainer.classList.add("card-body");
    textContainer.appendChild(bodyContainer);

    const cardText = document.createElement("p");
    cardText.classList.add("card-text", "mb-2");
    cardText.textContent = body;
    bodyContainer.appendChild(cardText);

    const cardTags = document.createElement("div");
    cardTags.classList.add("card-tags", "mb-2");

    if (tags) {
      tags.forEach((tag) => {
        const tagElement = document.createElement("span");
        tagElement.classList.add("fw-bold");
        tagElement.textContent = `#${tag} `;
        cardTags.appendChild(tagElement);
      });
    }

    bodyContainer.appendChild(cardTags);

    const linkContainer = document.createElement("div");
    linkContainer.classList.add("d-flex", "lazy-links");
    bodyContainer.appendChild(linkContainer);

    const link = document.createElement("a");
    link.classList.add("primary");
    link.href = `/feed/posts/post/?id=${id}`;
    link.textContent = "Read more";
    linkContainer.appendChild(link);

    const userName = document.createElement("a");
    userName.classList.add("secondary", "userName");
    userName.href = "#";
    userName.textContent = `@${author.name}`;
    linkContainer.appendChild(userName);

    contentContainer.appendChild(cardContainer);
  });
}
