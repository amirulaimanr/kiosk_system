const fileInput = document.querySelector('#file-input');

fileInput.addEventListener('change', event => {
const file = event.target.files[0];
const reader = new FileReader();

reader.onload = event => {
    const menus = JSON.parse(event.target.result);

    // Loop through the menus and add them to the table
    menus.forEach(menu => {
    const row = document.createElement('tr');
    row.setAttribute('data-id', menu.id);
    row.innerHTML = `
        <td>${menu.name}</td>
        <td>${menu.items}</td>
        <td><img src="${menu.imageUrl}" alt=""></td>
        <td>
        <a href="#" class="edit-button">Edit</a> | 
        <a href="#" class="delete-button">Delete</a>
        </td>
    `;
    table.appendChild(row);
    });
};

reader.readAsText(file);
});



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
    row.querySelector('td:nth-child(3) img').src = URL.createObjectURL(formData.get('menu-image'));

      // Update the menu in the JSON file
    const fileInput = document.querySelector('#file-input');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = event => {
        const menus = JSON.parse(event.target.result);
        const menuIndex = menus.findIndex(menu => menu.id == id);
        menus[menuIndex] = {
        id: id,
        name: formData.get('menu-name'),
        items: formData.get('menu-items'),
        imageUrl: URL.createObjectURL(formData.get('menu-image'))
        };

        const writer = new FileWriter();
        writer.onwriteend = event => {
        console.log('Menu updated successfully');
        };
        writer.onerror = event => {
        console.error('Error updating menu');
        };
        writer.write(JSON.stringify(menus));
    };

    reader.readAsText(file);
} else {
    // Create a new menu and add it to the table
    const row = document.createElement('tr');
    row.setAttribute('data-id', Date.now());
    row.innerHTML = `
    <td>${formData.get('menu-name')}</td>
    <td>${formData.get('menu-items')}</td>
    <td><img src="${URL.createObjectURL(formData.get('menu-image'))}" alt=""></td>
    <td>
        <a href="#" class="edit-button">Edit</a> | 
        <a href="#" class="delete-button">Delete</a>
    </td>
    `;
    table.appendChild(row);

    // Add the new menu to the JSON file
const fileInput = document.querySelector('#file-input');
const file = fileInput.files[0];
const reader = new FileReader();

reader.onload = event => {
const menus = JSON.parse(event.target.result);
menus.push({
    id: Date.now(),
    name: formData.get('menu-name'),
    items: formData.get('menu-items'),
    imageUrl: URL.createObjectURL(formData.get('menu-image'))
});

const writer = new FileWriter();
writer.onwriteend = event => {
    console.log('Menu added successfully');
};
writer.onerror = event => {
    console.error('Error adding menu');
};
writer.write(JSON.stringify(menus));
};

reader.readAsText(file);

table.addEventListener('click', event => {
    if (event.target.classList.contains('delete-button')) {
      // Delete the menu from the table
    const row = event.target.closest('tr');
    row.remove();

      // Delete the menu from the JSON file
const fileInput = document.querySelector('#file-input');
const file = fileInput.files[0];
const reader = new FileReader();

reader.onload = event => {
const menus = JSON.parse(event.target.result);
const menuIndex = menus.findIndex(menu => menu.id == id);
menus.splice(menuIndex, 1);

const writer = new FileWriter();
writer.onwriteend = event => {
    console.log('Menu deleted successfully');
};
writer.onerror = event => {
    console.error('Error deleting menu');
};
writer.write(JSON.stringify(menus));
};

reader.readAsText(file);

}})}});