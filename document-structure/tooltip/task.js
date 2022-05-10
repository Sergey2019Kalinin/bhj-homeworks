// находим все элементы, для которых нужна подсказка по клику
const hasoToltip = document.getElementsByClassName("has-tooltip");

// находим все элементы-подсказки
const tooltip = document.getElementsByClassName("tooltip");

// отменяем переход по ссылкам на элементах,
// для которых нужна подсказка по клику
for (let k = 0; k < hasoToltip.length; k++) {
  hasoToltip[k].onclick = function () {
    return false;
  };
}

// создаём элемент-подсказку в положении afterEnd
for (let i = 0; i < hasoToltip.length; i++) {

  hasoToltip[i].insertAdjacentHTML(
    "afterEnd",
    `<div class="tooltip">` + hasoToltip[i].title + `</div>`
  );

  // в обработчике добавляем или убираем класс для демонстрации подсказки
  hasoToltip[i].addEventListener("click", function () {

    if (!tooltip[i].classList.contains("tooltip_active")) {
      tooltip[i].classList.add("tooltip_active");

    } else {
      tooltip[i].classList.remove("tooltip_active");
    }

  });
}

/* Здравствуйте, прошу подсказать как действовать дальше:

- подсказка у второго элемента отображанется под первым.

- у последующих элементо подсказка вообще не отображается,
хотя появляется в HTML
*/