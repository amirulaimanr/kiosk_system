const forgotPasswordForm = document.getElementById('forgot-password-form');
forgotPasswordForm.addEventListener('submit', (event) => {
event.preventDefault();
const email = document.getElementById('email').value;

  // Read the users.json file
fetch('/json/users.json')
    .then((response) => response.json())
    .then((users) => {
      // Check if the provided email matches any of the entries in the file
    const user = users.find((user) => user.email === email);
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (user) {
        // If a matching entry is found, send a password reset email to the user
        sendPasswordResetEmail(email);
        
        successMessage.textContent = 'Link has successfully sent !';
        errorMessage.textContent = '';
    } else {
        // If no matching entry is found, display an error message

        errorMessage.textContent = 'No user found with that email address !';
        successMessage.textContent = '';
    }
    })
    .catch((error) => {
    console.error(error);
    });
});

function sendPasswordResetEmail(email) {
  // Send a password reset email to the user
    console.log(`Sending password reset email to ${email}`);
}