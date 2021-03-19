window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0);
})

var abrir = document.getElementById('cta');
var cerrar = document.getElementById('close');
var modalContainer = document.getElementById('modal-container');
var modal = document.getElementById('modal-apadrinar');

abrir.addEventListener("click", function(){
    modalContainer.style.visibility = 'visible';
    modalContainer.style.opacity = '1';
    modal.classList.toggle('modal-close');
});

cerrar.addEventListener('click', function(){
    modal.classList.toggle('modal-close');
    
    setTimeout(() => {
        modalContainer.style.visibility = 'hidden';
        modalContainer.style.opacity = '0';
        },500);
});
window.addEventListener('click', function(e){
    
    if(e.target == modalContainer){
        modal.classList.toggle('modal-close');
        setTimeout(() => {
            modalContainer.style.visibility = 'hidden';
            modalContainer.style.opacity = '0';
        },500);
    }
})