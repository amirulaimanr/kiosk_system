
  // Get the form and table elements
  const form = document.querySelector('#menu-form');
  const table = document.querySelector('#menu-table tbody');

  // Add an event listener for form submissions
  form.addEventListener('submit', event => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    const formData = new FormData(form);

    // Check if the form is for creating a new menu or updating an existing one
    const id = form.getAttribute('data-id');
    if (id) {
      // Update the menu in the table
      const row = table.querySelector(`tr[data-id="${id}"]`);
      row.querySelector('td:nth-child(1)').textContent = formData.get('menu-name');
      row.querySelector('td:nth-child(2)').textContent = formData.get('menu-items');
      row.querySelector('td:nth-child(3)').textContent = formData.get('menu-categories');
      row.querySelector('td:nth-child(4) img').src = URL.createObjectURL(formData.get('menu-image'));
    } else {
      // Create a new menu and add it to the table
      const row = document.createElement('tr');
      row.setAttribute('data-id', Date.now());
      row.innerHTML = `
        <td>${formData.get('menu-name')}</td>
        <td>${formData.get('menu-items')}</td>
        <td>${formData.get('menu-categories')}</td>
        <td><img src="${URL.createObjectURL(formData.get('menu-image'))}" alt=""></td>
        <td>
          <a href="#" class="edit-button">&nbsp;&nbsp;Edit&nbsp;&nbsp;</a> | 
          <a href="#" class="delete-button">&nbsp;&nbsp;Delete&nbsp;</a>
        </td>
      `;
      table.appendChild(row);
    }

    // Clear the form and reset the data-id attribute
    form.reset();
    form.removeAttribute('data-id');
  });

  // Add an event listener for clicks on the table
  table.addEventListener('click', event => {
    // Get the target element
    const target = event.target;

    // Check if the target is a delete button
    if (target.classList.contains('delete-button')) {
      // Get the parent row element
      const row = target.parentElement.parentElement;

      // Remove the row from the table
      row.remove();
    }

    // Check if the target is an edit button
    if (target.classList.contains('edit-button')) {
      // Get the parent row element
      const row = target.parentElement.parentElement;

    // Get the menu data from the row
    const id = row.getAttribute('data-id');
    const name = row.querySelector('td:nth-child(1)').textContent;
    const items = row.querySelector('td:nth-child(2)').textContent;
    const categories = row.querySelector('td:nth-child(3)').textContent;

    // Fill the form with the menu data and set the data-id attribute
    form.elements['menu-name'].value = name;
    form.elements['menu-items'].value = items;
    form.elements['menu-categories'].value = categories;
    form.setAttribute('data-id', id);
  }

const logoutButton = document.querySelector('#logout-button');

logoutButton.addEventListener('click', event => {
  // Set the login status to false
  localStorage.setItem('isLoggedIn', 'false');

  // Redirect the user to the login page
  window.location = '../admin.html';
});

});
