// находим необходимые элементы:

// список дел
const tasksList = document.getElementById("tasks__list");

// инпут
const input = document.getElementById("task__input");

// кнопка добавления в список дел
const tasksAdd = document.getElementById("tasks__add");

// список кнопок удаления
const taskRemove = document.getElementsByClassName("task__remove");

// обработчик по нажатию на Добавить
tasksAdd.addEventListener("click", (event) => {

    // прослушивая событие отправки формы,
    // можем отменить действие браузера по умолчанию
    event.preventDefault();

    // добавляем в список дел введённое в инпуте
    tasksList.innerHTML +=
        `<div class="task">
            <div class="task__title">` +

        input.value +

            `</div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;

    // очищаем инпут
    input.value = "";

    // обработчик на текущую кнопку Удалить
    taskRemove[taskRemove.length - 1].addEventListener("click", () => {

        // удаление через метод родительского элемент кнопки Удалить
        taskRemove[taskRemove.length - 1].parentElement.remove();

    });
});

/*

Здравствуйте, прошу подсказать как действовать дальше:

- добавление новых пунктов в список дел стирает
обработчик кнопки удаления у предыдещего пункта списка

*/






