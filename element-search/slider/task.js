const arrayItem = Array.from(document.getElementsByClassName('slider__item'));
const arrowLeft = document.getElementsByClassName('slider__arrow_prev');
const arrowRight = document.getElementsByClassName('slider__arrow_next');

let n = 0;

function slideImg(arg) {
    document.querySelector("div.slider__item.slider__item_active")
    .className = "slider__item";
    
    return arrayItem[arg]
    .classList.add('slider__item_active');
};


arrowLeft[0].onclick = function() {
    if (n === 0) {
        n = (arrayItem.length - 1);
    } else if (n !== 0) {
        n -= 1;
    }
    return slideImg(n);
}

arrowRight[0].onclick = function() {
    if (n < (arrayItem.length - 1)) {
        n += 1;
    } else if (n === (arrayItem.length - 1)) {
        n = 0;
    }
    return slideImg(n);
}
