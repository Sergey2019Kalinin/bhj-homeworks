const cartProducts = document.getElementsByClassName("cart__products");

const cart = document.getElementsByClassName("cart");

const productAdd = document.getElementsByClassName("product__add");

// число добавляемого товара
const quantityValue = document.getElementsByClassName(
  "product__quantity-value"
);

const controlDecrease = document.getElementsByClassName(
  "product__quantity-control_dec"
);

const controlIncrease = document.getElementsByClassName(
  "product__quantity-control_inc"
);

// создаём обработчики каждого элемента каждой карточки товара
for (let i = 0; i < productAdd.length; i++) {

  // на кнопке "Добавить продукт"
  productAdd[i].addEventListener("click", () => {

let arrayForCheck = Array.from(cartProducts[0].getElementsByClassName("cart__product"));

let result = arrayForCheck.find(element => element.dataset.id === 
  productAdd[i].closest(".product").dataset.id);

if (result) {
  result.getElementsByClassName("cart__product-count")[0].innerText =
   Number(result.getElementsByClassName("cart__product-count")[0].innerText) + 
   Number(quantityValue[i].innerText);

} else {
        let product = document.createElement("text");

        cartProducts[0].appendChild(product);

        product.outerHTML =
          `<div class="cart__product" data-id="` +
          productAdd[i].closest(".product").dataset.id +
          `">
                <img class="cart__product-image" src="` +
          productAdd[i].closest(".product").getElementsByTagName("img")[0].src +
          `">
                <div class="cart__product-count">` +
          productAdd[i]
            .closest(".product")
            .getElementsByClassName("product__quantity-value")[0].innerText +
          `</div>
            </div>`;
          }
        });

  //на кнопке "Увеличить количество товара"
  controlIncrease[i].addEventListener("click", () => {
    quantityValue[i].innerText = Number(quantityValue[i].innerText) + 1;
  });

  //на кнопке "Уменьшить количество товара"
  controlDecrease[i].addEventListener("click", () => {
    if (Number(quantityValue[i].innerText) > 1) {
      quantityValue[i].innerText = Number(quantityValue[i].innerText) - 1;
    
  };
});
}
