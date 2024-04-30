// LOADER
(function() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header__active')
        } else {
            header.classList.remove('header__active')
        }
    };
})();

(function() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.header__nav')
    const closeItem = document.querySelector('.header__nav-close')
    burger.addEventListener('click', () => {
        menu.classList.add('header__nav-active')
    });
    closeItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active')
    })
}) ();

(function() {
    const mask = document.querySelector('.mask')
    window.addEventListener('load', () => {
        mask.classList.add('hide')
        setTimeout(() => {
            mask.remove()
        }, 100000)
    })
})();

// BURGER

document.querySelector('.burger-icon').addEventListener('click', function() {
    document.getElementById('header__nav').classList.toggle('open');
  });