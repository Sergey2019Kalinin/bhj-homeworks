// товары в Корзине
const cartProducts = document.getElementsByClassName("cart__products");

// сам элемент-Корзина
const cart = document.getElementsByClassName("cart");

// кнопки "Добавить продукт"
const productAdd = document.getElementsByClassName("product__add");

// число добавляемого товара
const quantityValue = document.getElementsByClassName(
  "product__quantity-value"
);

// кнопки "Уменьшить количество товара"
const controlDecrease = document.getElementsByClassName(
  "product__quantity-control_dec"
);

// кнопки "Увеличить количество товара"
const controlIncrease = document.getElementsByClassName(
  "product__quantity-control_inc"
);

// массив для артикулов товаров в корзине
let cartArticulArray = [];

// создаём обработчики каждого элемента каждой карточки товара
for (let i = 0; i < productAdd.length; i++) {

  // на кнопке "Добавить продукт"
  productAdd[i].addEventListener("click", () => {

    // находим корневой элемент карточки товара
    let root = productAdd[i].closest(".product");

    // если товара с таким же артикулом нет в корзине
    if (!cartArticulArray.includes(root.dataset.id)) {

    // создаём элемент для добавления в корзину
    let product =
      `<div class="cart__product" data-id="` +
      // добавляем артикул товара
      root.dataset.id +
      `">
            <img class="cart__product-image" src="` +
      // добавляем расположение картинки
      root.childNodes[3].src +
      `">
            <div class="cart__product-count">` +
      // добавляем отмеченное количество товара
      quantityValue[i].innerText +
      `</div>
            </div>`;

    // добавляем созданный элемент в корзину
    cartProducts[cartProducts.length - 1]
      .insertAdjacentHTML('afterEnd', product);

      // добавляем артикул товара в массив артикулов корзины
      cartArticulArray.push(root.dataset.id);

      // если есть в корзине товар с таки же артикулом,
      // добавляем введённое количество в имеющийся в корзине
    } else {

    // ищем в добавленный в Корзину товар с тем же артикулом,
    //что добавляется в данный момент
    let result = Array.from(cart[0].children)
    .filter(element => element.dataset.id === root.dataset.id);

    // зная положение элемента Количества в добавленном товаре,
    // находим его и добавляем введённое количество
    result[0].children[1].innerText = Number(result[0]
        .children[1].innerText) + Number(quantityValue[i].innerText);
    }

  });

  //на кнопке "Увеличить количество товара"
  controlIncrease[i].addEventListener("click", () => {
    quantityValue[i].innerText = Number(quantityValue[i].innerText) + 1;
  });

  //на кнопке "Уменьшить количество товара"
  controlDecrease[i].addEventListener("click", () => {
    if (Number(quantityValue[i].innerText) > 0) {
      quantityValue[i].innerText = Number(quantityValue[i].innerText) - 1;
    }
  });
}

/*

Здравствуйте, прошу подсказать как действовать дальше.
Возникшие сложности:

- не могу добавить товар именно в Корзину В HTML-разметке.
метод append:
cartProducts[cartProducts.length - 1].append(product)
добавляет текст в кавычках вместо HTML-разметки.
А appendChild выдаёт ошибку.

- товары в корзине располагаются друг под другом - скорее всего, по причине
ошибочного установления элемента в разметку HTML методом insertAdjacentHTML.

- количество товара в корзине отображается в правом углу - скорее всего, по причине
ошибочного установления элемента в разметку HTML методом insertAdjacentHTML.
- 
*/
