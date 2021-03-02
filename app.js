window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0);
})


ScrollReveal().reveal('.eventos' , { delay: 700 });
ScrollReveal().reveal('.card ' , { delay: 700 });
ScrollReveal().reveal('p ' , { delay: 700 });
ScrollReveal().reveal('h5 ', { delay: 700 });
ScrollReveal().reveal('.btn ' , { delay: 700 });
ScrollReveal().reveal('footer ' , { delay: 600 });
ScrollReveal().reveal('iframe ' , { delay: 600 });
ScrollReveal().reveal('.logo-footer' , { delay: 1000 });
ScrollReveal().reveal('li' , { delay: 1000 });