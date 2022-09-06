const minus = Array.from(document.getElementsByClassName('product__quantity-control_dec'));
const plus = Array.from(document.getElementsByClassName('product__quantity-control_inc'));

minus.forEach((btn) => btn.addEventListener('click', (e) => {
  let quantity = e.target.nextElementSibling;
  quantity.textContent > 1 ? quantity.textContent-- : quantity.textContent = 1;
}));

plus.forEach((btn) => btn.addEventListener('click', (e) => {
  let quantity = e.target.previousElementSibling;
  quantity.textContent++;
}));

const btnAdd = Array.from(document.getElementsByClassName('product__add'));
let cart = document.querySelector('.cart__products');

btnAdd.forEach((btn) => btn.addEventListener('click', (e) => {
  let id = e.target.closest('.product').dataset.id;
  let img = e.target.closest('.product').querySelector('.product__image').src;
  let count = e.target.closest('.product').querySelector('.product__quantity-value').textContent;
  let products = Array.from(document.getElementsByClassName('cart__product'));
  let isInCart = false;

  products.forEach((product) => {
    if (product.getAttribute('data-id') === id) {
      product.querySelector('.cart__product-count').textContent = parseInt(product.querySelector('.cart__product-count').textContent) + parseInt(count);
      isInCart = true;
    }
  });

  if (!isInCart) {
    cart.innerHTML += `<div class="cart__product" data-id=` + id + `>
      <img class="cart__product-image" src=`+ img + `>
      <div class="cart__product-count">` + count + `</div>
      </div>`
  }
  /*
  let isInCart = products.find((product)=> {
    product.dataset.id === id;
  });
  if (isInCart) {
    products.querySelector('.cart__product-count').textContent = parseInt(products.querySelector('.cart__product-count').textContent) + parseInt(count);
  } else {
    cart.innerHTML += `<div class="cart__product" data-id=` + id + `>
      <img class="cart__product-image" src=`+ img + `>
      <div class="cart__product-count">` + count + `</div>
      </div>`
  }   */  
}));