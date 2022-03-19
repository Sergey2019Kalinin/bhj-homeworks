let dropdownList = document.querySelector("ul.dropdown__list");
let dropdownValue = document.querySelector("div.dropdown__value");
let dropdownLink = Array.from(document.querySelectorAll("a.dropdown__link"));

//функция обработчика кнопки с выбором ЯП
let languageSelection = () => {

//показываем вложенное меню
    if(dropdownList.className === "dropdown__list") {
        dropdownList.classList.add("dropdown__list_active");

//или скрываем предыдущее
    } else if(dropdownList.classList.contains("dropdown__list_active")) {
          dropdownList.classList.remove("dropdown__list_active");
    }
}

//регистрируем обработчик
dropdownValue.addEventListener("click", languageSelection) ;

let dropdownBtnFunc = function() {
    dropdownValue.textContent = this.textContent;
    dropdownList.classList.remove("dropdown__list_active");
    return false;
};

// обработчики кнопок вложенного меню
for(let i = 0; dropdownLink.length > i; i++) {
    dropdownLink[i].onclick = function() {
        dropdownValue.textContent = this.textContent;
        dropdownList.classList.remove("dropdown__list_active");
        return false;
    }
}