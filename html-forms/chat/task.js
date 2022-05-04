//получаем необходимые элементы
const badge = document.getElementsByClassName("chat-widget")[0];
const input = document.getElementById("chat-widget__input");
const messages = document.querySelector(".chat-widget__messages");

//обработчик клика по красному бейджу
badge.addEventListener("click", () => {
  badge.classList.add("chat-widget_active");
});

const messagesArray = [
  "Добрый день! До свидания!",
  "Где ваша совесть?",
  "Кто тут",
  "К сожалению, все операторы сейчас заняты. Не пишите нам больше",
  "Мы ничего не будем вам продавать",
  "Вы не купили ни одного товара для того, чтобы так с нами разговаривать!"
];

// функция получения рандомного числа в указанном диапазоне,
// включающем min и max
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ответ бота
const botMessage = function () {
  let date = new Date();
  messages.innerHTML +=
    `<div class="message">
    <div class="message__time">` +
    date.getHours() +
    `:` +
    date.getMinutes() +
    `</div>
    <div class="message__text">` +
    messagesArray[getRandomIntInclusive(0, messagesArray.length - 1)] +
    `</div>
    </div>`;
};

// добавление в HTML по клику на Enter
input.onkeyup = function (e) {
  if (e.keyCode === 13) {
    if (input.value) {
      let date = new Date();
      messages.innerHTML +=
        `
        <div class="message  message_client">
        <div class="message__time">` +
        date.getHours() +
        `:` +
        date.getMinutes() +
        ` </div>
        <div class="message__text"> ` +
        input.value +
        ` </div>
        </div> `;

      // очищаем поле ввода
      input.value = "";

      // отвечаем сообщением бота
      botMessage();
    }
  }

  // отменяем действие браузера
  return false;
};
