import { handleSearch } from "./handleSearch.mjs";
export function setupSearchForm() {
  const searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleSearch);
}
