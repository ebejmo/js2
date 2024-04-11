export function toggleActionButton(postAuthorEmail, buttonId) {
  const button = document.querySelector(`${buttonId}`);
  const profileData = localStorage.getItem("profile");

  if (profileData) {
    const { email } = JSON.parse(profileData);
    console.log("Email:", email, "postAuthor:", postAuthorEmail);
    if (email === postAuthorEmail) {
      button.disabled = false;
      return true;
    }
  }
  button.disabled = true;
  return false;
}
