let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

// Cart Working JS
if (document.readyState == 'loading'){
document.addEventListener ('DOMContentLoaded', ready);
}else{
ready();
}

//Making function

// Making Function

// Making Function
function ready(){
  // Reomve Items From Cart
  var removeCartButtons = document. getElementsByClassName('cart-remove');
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i];
    button.addEventListener('click', removeCartItem);
  }
  // Quantity Changes
  var quantityInputs = document.getElementsByClassName('cart-quantity');
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add To Cart
  var addCart = document.getElementsByClassName('btn');
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener('click', addCartClicked) ;
  }
}

// Remove Items From Cart

function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement. remove();
  updatetotal();
}

// Quantity Changes
function quantityChanged(event){
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal();
}

// Add To Cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText ;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  //var choice = shopProducts.getElementsByClassName("choice-espresso")[0].innerText ;
  addProductToCart(title, price, productImg);
  updatetotal();
}

function addProductToCart (title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-item");
  var cartItems = document.getElementsByClassName("cart-items-container")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You have already add this item to cart");
      return;
    }
  }
  var cartBoxContent = `<span class="fas fa-times cart-remove"></span><img src= "${productImg}" alt=""><div class="content"><div class="product-title"><h3>${title}</h3></div><div class="size">Venti (20 oz)</div><div class="size">Espresso</div> <div class="quantity">Quantity: </div><input type="number" value="1" class="cart-quantity"><div class="price">${price}</div></div>`;

  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
  cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}

//Update total
function updatetotal(){

var cartContent = document.getElementsByClassName("cart-items-container")[0];
var cartBoxes = cartContent.getElementsByClassName("cart-item");
var total = 0;

for (var i = 0; i < cartBoxes.length; i++) {
  var cartBox = cartBoxes[i];
  var priceElement = cartBox.getElementsByClassName("price")[0];
  var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
  var price = parseFloat(priceElement.innerText.replace("RM", ""));
  var quantity = quantityElement.value;
  total = total + price * quantity;

  // if item contain some cents value 
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("final-price")[0].innerText = "RM" + total;
  }
}













// popup 1

var popup1 = document.getElementById("popup1");
var closePopup1 = document.getElementById("close-popup1");
var close1 = document.getElementById("close1")
var openPopup1 = document.getElementById("btn1");

openPopup1.addEventListener("click", function() {
  popup1.style.display = "block";
});

closePopup1.addEventListener("click", function() {
  popup1.style.display = "none";
});

close1.addEventListener("click", function() {
    popup1.style.display = "none";
  });

// popup 2

var popup2 = document.getElementById("popup2");
var closePopup2 = document.getElementById("close-popup2");
var close2 = document.getElementById("close2")
var openPopup2 = document.getElementById("btn2");

openPopup2.addEventListener("click", function() {
  popup2.style.display = "block";
});

closePopup2.addEventListener("click", function() {
  popup2.style.display = "none";
});

close2.addEventListener("click", function() {
    popup2.style.display = "none";
  });

// popup 3

var popup3 = document.getElementById("popup3");
var closePopup3 = document.getElementById("close-popup3");
var close3 = document.getElementById("close3")
var openPopup3 = document.getElementById("btn3");

openPopup3.addEventListener("click", function() {
  popup3.style.display = "block";
});

closePopup3.addEventListener("click", function() {
  popup3.style.display = "none";
});

close3.addEventListener("click", function() {
    popup3.style.display = "none";
  });

// popup 4

var popup4 = document.getElementById("popup4");
var closePopup4 = document.getElementById("close-popup4");
var close4 = document.getElementById("close4")
var openPopup4 = document.getElementById("btn4");

openPopup4.addEventListener("click", function() {
  popup4.style.display = "block";
});

closePopup4.addEventListener("click", function() {
  popup4.style.display = "none";
});

close4.addEventListener("click", function() {
    popup4.style.display = "none";
  });

// popup 5

var popup5 = document.getElementById("popup5");
var closePopup5 = document.getElementById("close-popup5");
var close5 = document.getElementById("close5")
var openPopup5 = document.getElementById("btn5");

openPopup5.addEventListener("click", function() {
  popup5.style.display = "block";
});

closePopup5.addEventListener("click", function() {
  popup5.style.display = "none";
});

close5.addEventListener("click", function() {
    popup5.style.display = "none";
  });

// popup 6

var popup6 = document.getElementById("popup6");
var closePopup6 = document.getElementById("close-popup6");
var close6 = document.getElementById("close6")
var openPopup6 = document.getElementById("btn6");

openPopup6.addEventListener("click", function() {
  popup6.style.display = "block";
});

closePopup6.addEventListener("click", function() {
  popup6.style.display = "none";
});

close6.addEventListener("click", function() {
    popup6.style.display = "none";
  });

  // popup 7

var popup7 = document.getElementById("popup7");
var closePopup7 = document.getElementById("close-popup7");
var close7 = document.getElementById("close7")
var openPopup7 = document.getElementById("btn7");

openPopup7.addEventListener("click", function() {
  popup7.style.display = "block";
});

closePopup7.addEventListener("click", function() {
  popup7.style.display = "none";
});

close7.addEventListener("click", function() {
    popup7.style.display = "none";
  });


// popup 13

var popup13 = document.getElementById("popup13");
var closePopup13 = document.getElementById("close-popup13");
var close13 = document.getElementById("close13")
var openPopup13 = document.getElementById("btn13");

openPopup13.addEventListener("click", function() {
  popup13.style.display = "block";
});

closePopup13.addEventListener("click", function() {
  popup13.style.display = "none";
});

close13.addEventListener("click", function() {
    popup13.style.display = "none";
  });

// popup 14

var popup14 = document.getElementById("popup14");
var closePopup14 = document.getElementById("close-popup14");
var close14 = document.getElementById("close14")
var openPopup14 = document.getElementById("btn14");

openPopup14.addEventListener("click", function() {
  popup14.style.display = "block";
});

closePopup14.addEventListener("click", function() {
  popup14.style.display = "none";
});

close14.addEventListener("click", function() {
    popup14.style.display = "none";
  });

// popup 15

var popup15 = document.getElementById("popup15");
var closePopup15 = document.getElementById("close-popup15");
var close15 = document.getElementById("close15")
var openPopup15 = document.getElementById("btn15");

openPopup15.addEventListener("click", function() {
  popup15.style.display = "block";
});

closePopup15.addEventListener("click", function() {
  popup15.style.display = "none";
});

close15.addEventListener("click", function() {
    popup15.style.display = "none";
  });

// popup 16

var popup16 = document.getElementById("popup16");
var closePopup16 = document.getElementById("close-popup16");
var close16 = document.getElementById("close16")
var openPopup16 = document.getElementById("btn16");

openPopup16.addEventListener("click", function() {
  popup16.style.display = "block";
});

closePopup16.addEventListener("click", function() {
  popup16.style.display = "none";
});

close16.addEventListener("click", function() {
    popup16.style.display = "none";
  });

// popup 17

var popup17 = document.getElementById("popup17");
var closePopup17 = document.getElementById("close-popup17");
var close17 = document.getElementById("close17")
var openPopup17 = document.getElementById("btn17");

openPopup17.addEventListener("click", function() {
  popup17.style.display = "block";
});

closePopup17.addEventListener("click", function() {
  popup17.style.display = "none";
});

close17.addEventListener("click", function() {
    popup17.style.display = "none";
  });

// popup 26

var popup26 = document.getElementById("popup26");
var closePopup26 = document.getElementById("close-popup26");
var close26 = document.getElementById("close26")
var openPopup26 = document.getElementById("btn26");

openPopup26.addEventListener("click", function() {
  popup26.style.display = "block";
});

closePopup26.addEventListener("click", function() {
  popup26.style.display = "none";
});

close26.addEventListener("click", function() {
    popup26.style.display = "none";
  });

// popup 27

var popup27 = document.getElementById("popup27");
var closePopup27 = document.getElementById("close-popup27");
var close27 = document.getElementById("close27")
var openPopup27 = document.getElementById("btn27");

openPopup27.addEventListener("click", function() {
  popup27.style.display = "block";
});

closePopup27.addEventListener("click", function() {
  popup27.style.display = "none";
});

close27.addEventListener("click", function() {
    popup27.style.display = "none";
  });

// popup 28

var popup28 = document.getElementById("popup28");
var closePopup28 = document.getElementById("close-popup28");
var close28 = document.getElementById("close28")
var openPopup28 = document.getElementById("btn28");

openPopup28.addEventListener("click", function() {
  popup28.style.display = "block";
});

closePopup28.addEventListener("click", function() {
  popup28.style.display = "none";
});

close28.addEventListener("click", function() {
    popup28.style.display = "none";
  });

// popup 29

var popup29 = document.getElementById("popup29");
var closePopup29 = document.getElementById("close-popup29");
var close29 = document.getElementById("close29")
var openPopup29 = document.getElementById("btn29");

openPopup29.addEventListener("click", function() {
  popup29.style.display = "block";
});

closePopup29.addEventListener("click", function() {
  popup29.style.display = "none";
});

close29.addEventListener("click", function() {
    popup29.style.display = "none";
  });

// popup 30

var popup30 = document.getElementById("popup30");
var closePopup30 = document.getElementById("close-popup30");
var close30 = document.getElementById("close30")
var openPopup30 = document.getElementById("btn30");

openPopup30.addEventListener("click", function() {
  popup30.style.display = "block";
});

closePopup30.addEventListener("click", function() {
  popup30.style.display = "none";
});

close30.addEventListener("click", function() {
    popup30.style.display = "none";
  });

// popup 31

var popup31 = document.getElementById("popup31");
var closePopup31 = document.getElementById("close-popup31");
var close31 = document.getElementById("close31")
var openPopup31 = document.getElementById("btn31");

openPopup31.addEventListener("click", function() {
  popup31.style.display = "block";
});

closePopup31.addEventListener("click", function() {
  popup31.style.display = "none";
});

close31.addEventListener("click", function() {
    popup31.style.display = "none";
  });

// popup 32

var popup32 = document.getElementById("popup32");
var closePopup32 = document.getElementById("close-popup32");
var close32 = document.getElementById("close32")
var openPopup32 = document.getElementById("btn32");

openPopup32.addEventListener("click", function() {
  popup32.style.display = "block";
});

closePopup32.addEventListener("click", function() {
  popup32.style.display = "none";
});

close32.addEventListener("click", function() {
    popup32.style.display = "none";
  });


// popup 33

var popup33 = document.getElementById("popup33");
var closePopup33 = document.getElementById("close-popup33");
var close33 = document.getElementById("close33")
var openPopup33 = document.getElementById("btn33");

openPopup33.addEventListener("click", function() {
  popup33.style.display = "block";
});

closePopup33.addEventListener("click", function() {
  popup33.style.display = "none";
});

close33.addEventListener("click", function() {
    popup33.style.display = "none";
  });

  //

