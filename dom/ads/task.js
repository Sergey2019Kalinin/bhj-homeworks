//получаем список текстовых объявлений
let rotator = document.querySelectorAll('span.rotator__case');

//счётчик
let i = 0;

function rotate() {
    
//пока находимся в пределах длинны списка, пытаемся удалить класс активного элемента
//увеличиваем счётчик
    if(i <= rotator.length) {
        rotator[i].classList.remove('rotator__case_active');
        i++;
    };

//пока значение менее величины длинны списка
//добавляем следующему по списку класс активного элемента
    if(i < rotator.length) {
    rotator[i].classList.add('rotator__case_active');

//иначе обнуляем счётчик и добавляем класс активного элемента
    } else {
        i = 0;
        rotator[i].classList.add('rotator__case_active');
    }
}

setInterval(rotate, 1000);