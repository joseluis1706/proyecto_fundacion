window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0);
})


ScrollReveal().reveal('.eventos' , { delay: 900 });
ScrollReveal().reveal('.card ' , { delay: 800 });
ScrollReveal().reveal('p ' , { delay: 900 });
ScrollReveal().reveal('h5 ', { delay: 900 });
ScrollReveal().reveal('.btn ' , { delay: 900 });
ScrollReveal().reveal('footer ' , { delay: 900 });
ScrollReveal().reveal('iframe ' , { delay: 900 });
ScrollReveal().reveal('.logo-footer' , { delay: 1400 });
ScrollReveal().reveal('li' , { delay: 1400 });