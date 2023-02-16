const form = document.getElementById('login-form');
form.addEventListener('submit', (event) => {
event.preventDefault();
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

  // Read the users.json file
fetch('/json/users.json')
    .then((response) => response.json())
    .then((users) => {
      // Check if the provided username and password match any of the entries in the file
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
        // If the login is successful, redirect the user to the home page
        window.location.href = '/screen/admin_menu.html';
    } else {
        // If the login is unsuccessful, display an error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password !';
    }
    })
    .catch((error) => {
    console.error(error);
    });

});

