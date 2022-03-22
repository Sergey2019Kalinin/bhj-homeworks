//получаем необходимые элементы и коллекции элементов
let fontSizes = document.querySelectorAll('a.font-size');
let book = document.getElementById('book');

//через цикл регистрируем обработчики на кнопках переключения шрифтов
for(let i  = 0; i < fontSizes.length; i++) {
    fontSizes[i].addEventListener('click', function() {

//снимаем метку активного размера шрифта
    book.className = 'book';

//удаляем метку активного в класс выбранного размера шрифта
    fontSizes.forEach((item) => 
        item.classList.remove('font-size_active'));

//добавляем метку активного в класс выбранного размера шрифта
    this.classList.add('fontSize_active');

//по свойству data определяем выбранный размер шрифта
//и указываем необходимый класс элементу book
    switch (this.dataset.size) {
        case 'small':
        book.classList.add('book_fs-small')
        break;

        case 'big':
        book.classList.add('book_fs-big')
        break;
        };

//отмена стандартного действия - перехода по ссылке
//(не работает, страница всё равно обновляется)
    return false;
    });
}




