const arrayItem = Array.from(document.getElementsByClassName('slider__item'));
const arrowLeft = document.getElementsByClassName('slider__arrow_prev');
const arrowRight = document.getElementsByClassName('slider__arrow_next');

let n = 0;

function slideImg(arg) {
    arrayItem.forEach((e, i) => {
        if (e.classList.contains('slider__item_active')) {
            return e.classList.remove('slider__item_active');
        }
    })
    return arrayItem[arg].classList.add('slider__item_active');
}

arrowLeft[0].onclick = function() {
    if (n === 0) {
        n = 4;
        return slideImg(n);
    } else if (n !== 0) {
        n -= 1;
        return slideImg(n);
    }
}
arrowRight[0].onclick = function() {
    if (n < 4) {
        n += 1;
        return slideImg(n);
    } else if (n === 4) {
        n = 0;
        return slideImg(n);
    }
}
