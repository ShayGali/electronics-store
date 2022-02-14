
# **Electronics Store App**

All rights reserved - Shay gali and Shir Segev

<br>

Final project in react-native course.

This app is an online shopping electronics store application.

<br>

# Screen shots from the app:

## Home Screen

All the electronics categories that can be purchase from in the app:

- There is an cart icon above, in the header of the app, that by clicking on it, it will navigate to the shopping cart screen in the app.
  
<img height=500 src="./myapp/assets/app pic/home screen.
png">

#

## Category Screen

All the products in one of the categories

- The amount of products in this category shown above, in the header of the app.
  
- There is an cart icon above in the header as well, that by clicking on it, it will navigate to the shopping cart in the app.
  
<img height=500 src="./myapp/assets/app pic/category.
png">

#

## Product Details Screen

All the Details of one of the products in the app.

- The title of the product is shown above, in the header of the app.
  
- There is an cart icon above in the header as well, that by clicking on it, it will navigate to the shopping cart in the app.

<img height=500 src="./myapp/assets/app pic/product detail 1.
png"><br>

- By clicking on the "Add to cart" button the current product will be added to the cart, and the user will be navigated to the cart screen.

<img height=500 src="./myapp/assets/app pic/product detail 2.
png"><br>

#

## Cart Screen

The cart with all the products that have been added by the user to the cart.

- Every item in the cart has an image, title, price snd shipping price of that product. In addition, there is also the number of items of the same product, which was added a few times by the user.
  
- There is an input box for the user to enter a coupon code - optional. In a case the user did enter a coupon, the cart subtotal price will reduced according to the dicount precentage.
  - Coupon codes:
    - ShayG$ - is 15% discount of the total price.
    - Wow35 - is 35% discount of the total price.
    - IDK_O^O - is 50% discount of the total price.
  
- The subtotal price is the calculation of - the sum of the price and shipping price of each item in the cart.
  
- By clicking on the "Go to payment..." button the user will be navigated to the payment screen.
  
- There is an home icon above, in the header of the app, that by clicking on it, it will navigate to the home screen in the app.

<img height=500 src="./myapp/assets/app pic/cart 1.
png"><br>

- By sliding an item to the left, remove button will appear and by clicking it, the current product will remove from the cart(the subtotal price will be updated as well).
  
- By entering a coupon code, a new total price will appear which is the calculation of the subtotal price and the discount precentage of this coupon code, unless there is no such coupon code and will appear an appropriate message to the user.

<img height=500 src="./myapp/assets/app pic/cart 2.
png"><br>

#

## Payment Screen

In this page the user will fill his details and credit card details to pay for the items that in his the shopping cart.

- There are several input boxes for the user to enter his details and credit card details. All the input boxes has to be filled and appropriately, in case one of those input boxes or more are not filled correctly, and by clicking the "Submit" button will appear an appropriate message to the user. The navigation to the next page will be disabled to the user until all the input boxes will be filled correctly.
  
- There is an home icon above, in the header of the app, that by clicking on it, it will navigate to the home screen in the app.

<img height=500 src="./myapp/assets/app pic/payment 1.
png"><br>

- By clicking on the "Submit" button the user will be navigated to the ordered screen.

<img height=500 src="./myapp/assets/app pic/payment 2.
png"><br>

## Payment Screen - Error

The payment screen in case the input boxes are empty and the user pressed submit.

<img height=500 src="./myapp/assets/app pic/payment 3.
png"><br>

<img height=500 src="./myapp/assets/app pic/pmayment 4.
png"><br>

## ordered Screen

This screen will appear only after the user filled all the details in the payment screen.

- In addition to the "Thank you" message, the address from the details of the payment screen that the user entered, will also appear in this screen, for user convenience.

- There is an home icon above, in the header of the app, that by clicking on it, it will navigate to the home screen in the app.

<img height=500 src="./myapp/assets/app pic/ordered.
png"><br>
