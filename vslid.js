let sliderContainer = document.querySelector('.total'),
    left = document.querySelector('.left'),
    slidLenght = document.querySelectorAll('.left>div').length,
    right = document.querySelector('.right'),
    up = document.querySelector('.up'),
    down = document.querySelector('.down');

let slidAmtR = 0,
    slidAmtL = 0,
    slideIndexRight = 0,
    slideIndexLeft = slidLenght - 1,
    prevSlide = 0,
    animationId = 0;
// setting initial screen
function init() {
    slidAmtL = window.innerHeight * (slidLenght - 1);
    left.style.top = -slidAmtL + 'px';
    left.style.transition = 'none';
}
//event listeners for slider buttons
up.addEventListener('click', () => upButton());
down.addEventListener('click', () => downButton());
//Function For the up slider button
function upButton() {
    slideIndexRight++;
    slideIndexLeft--;
    slidAmtR = -(window.innerHeight * slideIndexRight);
    slidAmtL = (window.innerHeight * slideIndexLeft);
    left.style.transition = 'all 0.3s ease-in';
    //moving right slider up
    if (slideIndexRight < (slidLenght)) {
        right.style.top = `${slidAmtR}px`;
    } else {
        slidAmtR = 0;
        right.style.top = `${slidAmtR}px`;
        slideIndexRight = 0;
    }
    //Moving left slider down
    if (slideIndexLeft > -1) {
        left.style.top = `${-slidAmtL}px`;
    } else {
        slidAmtL = -(window.innerHeight * (slidLenght - 1));
        left.style.top = `${slidAmtL}px`;
        slideIndexLeft = slidLenght - 1;
    }

}
//function for down slider button
function downButton() {
    slideIndexRight--;
    slideIndexLeft++;
    slidAmtL = -(window.innerHeight * slideIndexLeft);
    slidAmtR = (window.innerHeight * slideIndexRight);
    left.style.transition = 'all 0.3s ease-in';
    //Moving left slider up
    if (slideIndexLeft < (slidLenght)) {
        left.style.top = `${slidAmtL}px`;
    } else {
        slidAmtL = 0;
        left.style.top = `${slidAmtL}px`;
        slideIndexLeft = 0;
    }
    //Moving right slider down
    if (slideIndexRight > -1) {
        right.style.top = `${-slidAmtR}px`;
    } else {
        slidAmtR = -(window.innerHeight * (slidLenght - 1));
        right.style.top = `${slidAmtR}px`;
        slideIndexRight = slidLenght - 1;
    }
}

