export function showSpinner() {
  const spinner = document.querySelector(".spinner-border");
  if (spinner) {
    spinner.classList.remove("d-none");
    spinner.classList.add("d-flex");
  }
}

export function hideSpinner() {
  const spinner = document.querySelector(".spinner-border");
  if (spinner) {
    spinner.classList.remove("d-flex");
    spinner.classList.add("d-none");
  }
}
