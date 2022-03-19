//получаем необходимые элементы и коллекции элементов
let tabs = document.getElementsByClassName("tab");
let tabContents = document.getElementsByClassName("tab__content");

//с помощью цикла регистрируем обработчики событий на переключателях вкладок
for(let i  = 0; i < tabs.length; i++) {

/*
//вспомогательные переменные для хранения предыдущей вкладки
    let lastTab = undefined;
    let lastTabContent = undefined;
*/

//обработчик клика по названию вкладки
    tabs[i].addEventListener('click', () => {

//делаем все вкладки и содержимое неактивным
    Array.from(tabs).forEach((item) =>
        item.classList.remove("tab_active"));

    Array.from(tabContents).forEach((item) =>
        item.classList.remove("tab__content_active"));

/*
//проверяем, что предыдущая вкладка существует и
//удаляем характеризующие активность признаки
    if(lastTab !== undefined) {
        lastTab.classList.remove("tab_active");
    if(lastTabContent !== undefined) {
        lastTabContent.classList.remove("tab__content_active");
    };
*/

//выбранную вкладку и её содержимое делаем активным
        tabs[i].classList.add("tab_active");
        tabContents[i].classList.add("tab__content_active");

/*
//обновляем вспомогательные переменные для хранения предыдущей вкладки
    lastTab = tabs[i];
    console.log(lastTab);
    lastTabContent = tabContents[i];
    console.log(tabContents[i]);
    };
*/

});
}