// basic setup

const cartBtns = document.querySelectorAll('.add-to-cart-btn');
const notification = document.querySelector('#notification');

let cartItemText = document.querySelector('.cart span');
let cartItemCount = 0;

for(let i = 0; i < cartBtns.length; i++) {
  cartBtns[i].addEventListener('click', addToCart);
}

function addToCart() {
  notification.textContent = 'Item Added to cart';

  notification.setAttribute('class', 'success appear');
  cartItemCount++;

  for(let i = 0; i < cartBtns.length; i++) {
    cartBtns[i].disabled = true;
  }

  cartItemText.textContent = 'Cart [' + cartItemCount +']';

  setTimeout(function() {
    for(let i = 0; i < cartBtns.length; i++) {
      cartBtns[i].disabled = false;
    }

    notification.setAttribute('class', 'success disappear');
  }, 1500);
}
