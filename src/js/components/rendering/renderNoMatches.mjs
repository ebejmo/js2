export function renderNoMatches(message) {
  const contentContainer = document.querySelector("#content");

  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  const messageDiv = document.createElement("div");
  messageDiv.className = "alert alert-warning";
  messageDiv.setAttribute("role", "alert");

  messageDiv.textContent = message;

  contentContainer.appendChild(messageDiv);
}
