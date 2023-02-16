# kiosk_system
The purpose of this project is to design and develop web-based system of self-service ordering system for Starbucks Coffee Malaysia to be used in their store.

The objective of this product is:
1. to develop an ordering system that can improve the customer experience
2. significantly decrease customer waiting times
3. to reduce the amount of cash handled on-site as customers naturally
moved to card and contactless payments.
4. to complete the project by the project due date and within the budget

All software development initiatives that are pertinent to the project's aims and objectives are seen as being within its purview. Customers may examine the list of menus, add their chosen order to the cart, search the menu using a filter, view their order list, and check out using the web-based system, for instance. The system will also produce an order number automatically. The other unrelated goals or pursuits are seen as outside the purview.

| SYSTEM INTERFACE |

MAIN MENU PAGE 

![mainpage](https://user-images.githubusercontent.com/45988034/219322204-e5cc5123-7bea-4cdd-a662-354557216a8d.png)

This page allows users to choose about login as admin (only restricted for admin) or order here for customer by clicking the respective button located in this page. For admin users, the system will be redirected to the admin login page and for customer users the system will be redirected to the respective menu page.

ADMIN LOGIN PAGE

![admin panel](https://user-images.githubusercontent.com/45988034/219327828-903d80ee-701a-4006-93be-a9c90d3a5c31.png)

To login into the system, admin is required to enter their username and password followed by clicking the “Submit” button to login. There’s a forgot password option for admin that forgot their password. The system will be redirected to the forgot password page when the option was clicked.

ADMIN DASHBOARD SCREEN

![admin dashboard](https://user-images.githubusercontent.com/45988034/219328267-c4ab8901-0fc8-4402-8599-7000723e542b.png)

On this screen admin users can create new menu by insert some information about the menu such as menu name, price, categories and upload the menu image. All the menu created will be displayed under the create menu form by using table format. Inside the menu table there are 2 actions that can be made by admin which are edit menu and delete the menu. The edit action is important for admin to update the existing menu or change the menu based on real time situation. The delete actions also important for admin to delete the menu that currently not available, this always be done when the menu is a seasonal menu and not a regular menu at Starbucks.

MENU PAGE

![menu2](https://user-images.githubusercontent.com/45988034/219328659-028ad24c-16a2-4f93-b5cf-e4db62b2bb36.jpeg)

In this page, the customer will be able to choose between three main categories of drinks that are offered, which is espresso and coffee, Frappuccino and chocolate and tea. There are going to be a few selections of drinks under each of those categories. Each drink will consist of the name and the price of the drinks for the customer reference. When the customer already chooses the drinks, the customer will click on the “add to cart” button to move on to the popup page.

CUSTOMIZE ADDITIONAL ITEM/TOPPINGS

![menucustom item](https://user-images.githubusercontent.com/45988034/219328980-df57501e-965d-4d55-aa71-c9f9812eedb2.jpeg)

In the popup page, there will be a detailed information about the drinks that the customer has already chosen. It consists of the picture, the name of the drink and the overall ingredients that contained in the drink. The customer will make a size selection, whether the customer wants to pick the Venti (20 oz) or Grande (16 oz) size. There will be a text box under the size option where the customer will give their preference or addition so that the barista will add on their drinks. The customer will also pick the quantity of the drinks. After the customer confirmed their choice and selection, the ordered drinks will be added into the cart

CHECKOUT PAYMENT

![checkout payment](https://user-images.githubusercontent.com/45988034/219329364-c462ebf9-c22b-4dca-8426-6f8e53b2aa26.png)

Checkout payment page will be the next page after “checkout now” button was pressed. The user will be giving 7 types of payment to choose, where the first row is by using credit/debit card such as Visa, MasterCard, Starbucks member card, the second row by using QR pay e-wallet such as Shopee Pay, Touch’nGo eWallet, Maybank QRpay and the last row is using NFC pay like Apple pay, Samsung pay and GooglePay. All the payment method was chosen based on the popularity that Malaysian people often use. The user need to pressed one of the following method in order to proceed for the payment.

![nfcpay](https://user-images.githubusercontent.com/45988034/219329586-9b7a340f-28c3-4221-9511-b8d979c8cb18.png)
![cardpaywave](https://user-images.githubusercontent.com/45988034/219329624-61a9e5d0-dfb3-42f8-94d7-a6c225c71a21.png)
![qrpay](https://user-images.githubusercontent.com/45988034/219329657-dd8a295b-d150-4607-9d18-6ac59953c705.png)

After user choose their payment method, there will be one page that give instructions to the user in order to be more user-friendly system. After 5 sec the machine payment will be turn into green indicate that the machine is ready to be scan or tap for card and nfc type of payment. Besides, for the QR payment method the code scanner on the kiosk machine will turn red indicate that the machine is ready to scan the user QR code. The user also could change the payment type if they mistakenly pressed the wrong payment type.

RECEIPT 

![Receipt](https://user-images.githubusercontent.com/45988034/219329772-ae4ec8eb-5a37-4591-b0d2-cdf2ab21f973.png)

After done payment, the system will be redirect to receipt page. Here the user can see their order details and print the receipt by pressed the “print receipt” button. Then the system will automatically go to main page after 10 seconds.


