const tasksList = document.getElementById("tasks__list");

const input = document.getElementById("task__input");

const tasksAdd = document.getElementById("tasks__add");

const taskRemove = document.getElementsByClassName("task__remove");


tasksAdd.addEventListener("click", (event) => {
  // прослушивая событие отправки формы,
  // можем отменить действие браузера по умолчанию
  event.preventDefault();

  let newElement = document.createElement("div");

  newElement.innerHTML +=
    `<div class="task">
            <div class="task__title">` +
    input.value +
    `</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;


  tasksList.appendChild(newElement);

  // очищаем инпут
  input.value = "";

  newElement.querySelector(".task__remove").addEventListener("click", () => {
    // удаление через метод родительского элемент кнопки Удалить
    newElement.remove();
  });
});

