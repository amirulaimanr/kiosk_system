const orderNumber = document.getElementById('order-number');
const date = document.getElementById('date');
const paymentMethod = document.getElementById('payment-method');
const total = document.getElementById('total');

//Retrieve the order information from the server here
//...

orderNumber.innerHTML = data.orderNumber;
date.innerHTML = data.date;
paymentMethod.innerHTML = data.paymentMethod;
total.innerHTML = data.total;

const printReceiptButton = document.getElementById('print-receipt');
printReceiptButton.addEventListener('click', () => {
    window.print();
});