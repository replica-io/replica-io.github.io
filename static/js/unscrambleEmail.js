
// Function to unscramble and update the email link
function unscrambleEmail(event) {
  event.preventDefault(); // Prevent the default mailto action
  // take this from environment variables 
  // in obfuscated form
  // then unscramble it from the key (that too from the environment variables)
  const emailSalt = 'contact@replica-io.dev';

  const email = emailSalt; // Here, the email is directly assigned

  // Update the href attribute of the email link
  const emailLink = document.getElementById('emailLink');
  if (emailLink) {
    window.location.href = `mailto:${email}`; // Navigate to the unscrambled email link
  }
}
