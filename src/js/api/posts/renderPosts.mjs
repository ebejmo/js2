export function renderPosts(content) {
  const contentContainer = document.querySelector("#content");

  // clear content without using innerHTML
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  content.data.forEach(({ id, title, body, media }) => {
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
    cardText.classList.add("card-text");
    cardText.textContent = body;
    bodyContainer.appendChild(cardText);

    const link = document.createElement("a");
    link.classList.add("primary");
    link.href = `/feed/post/${id}`;
    link.textContent = "Read more";
    bodyContainer.appendChild(link);

    contentContainer.appendChild(cardContainer);
  });
}
