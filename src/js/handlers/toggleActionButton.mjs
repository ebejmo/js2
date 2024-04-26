export function toggleActionButton(postAuthorEmail, buttonId) {
  const button = document.querySelector(`${buttonId}`);
  const profileData = localStorage.getItem("profile");

  if (profileData) {
    const { email } = JSON.parse(profileData);
    if (email === postAuthorEmail) {
      button.disabled = false;
      return true;
    }
  }
  button.disabled = true;
  return false;
}
