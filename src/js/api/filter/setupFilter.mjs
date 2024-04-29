import { handleFilter } from "./handleFilter.mjs";

export function setupFilterForm() {
  const filterForm = document.querySelector("#filter-form");
  filterForm.addEventListener("submit", handleFilter);
}
