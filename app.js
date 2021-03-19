window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0);
})

let cerrar = document.getElementsByClassName('.close');
let abrir = document.getElementById('.cta');
let modal = document.getElementsByClassName('.modal');
let modalContainer = document.getElementsByClassName('.modal-container');

abrir.addEventListener('click', function(){
    modalContainer.style.opacity = '1';
    modalContainer.style.visibility = 'visible';
})