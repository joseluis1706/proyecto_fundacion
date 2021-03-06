const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let silderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', silderSectionLast);

function moverDerecha() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500)
}



function moverIzquierda() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let silderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', silderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}
btnRight.addEventListener('click', function(){
    moverDerecha();
});

btnLeft.addEventListener('click', function(){
    moverIzquierda();
});

setInterval(function(){
    moverDerecha();
}, 4000);