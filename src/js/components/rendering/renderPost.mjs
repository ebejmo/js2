export function renderPost(content, userName, postAuthorEmail) {
  const { title, body, media, created, tags } = content;

  document.querySelector("#navTitle").textContent = title;
  document.title = `${title} | Noroff Social`;

  const postDate = new Date(created).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card", "mb-3", "h-100");

  const row = document.createElement("div");
  row.classList.add("row", "g-0");
  cardContainer.appendChild(row);

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("col-4", "h-100");
  row.appendChild(imgContainer);

  const img = document.createElement("img");
  img.classList.add("img-fluid", "w-100", "h-100", "object-fit-cover");
  img.src = media
    ? media.url
    : "https://placehold.co/400?text=Noroff+Social&font=roboto";
  img.alt = media ? media.alt : "Placeholder image";
  imgContainer.appendChild(img);

  const textContainer = document.createElement("div");
  textContainer.classList.add("col-8");
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

  const name = document.createElement("h5");
  name.classList.add("card-author");
  name.textContent = `${userName}`;
  bodyContainer.appendChild(name);

  const email = document.createElement("a");
  email.href = "#";
  email.classList.add("card-author");
  email.textContent = `${postAuthorEmail}`;
  bodyContainer.appendChild(email);

  const cardDate = document.createElement("p");
  cardDate.classList.add("card-text-small");
  cardDate.textContent = postDate;
  bodyContainer.appendChild(cardDate);

  document.querySelector("#postContent").appendChild(cardContainer);
}
