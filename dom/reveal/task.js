//находим элементы с классом reveal
let textBlock = document.getElementsByClassName('reveal');

//через цикл регистрируем обработчики
for(let i  = 0; i < textBlock.length; i++) {

//отслеживаем скролл
  document.addEventListener('scroll', function() {
    
//в случае нахождения в области viewport, делаем элемент видимым
    let {top, bottom} = textBlock[i].getBoundingClientRect();
    if(top < window.innerHeight && bottom > 0) {
      textBlock[i].className = 'reveal reveal_active';

//элемент исчезает, когда покидает viewport
    } else {
      textBlock[i].className = 'reveal';
    }
});
}