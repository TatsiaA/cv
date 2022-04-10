const menu = document.querySelector('.header__menu');
menu.addEventListener('click',(e) => {
    e.target.closest('.header__menu').classList.toggle('active');
});

document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.header__menu')) {
        menu.classList.remove('active');
    }
})
