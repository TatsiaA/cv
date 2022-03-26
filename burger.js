const bgMenu = document.querySelector('.burger_menu');
bgMenu.addEventListener('click',(e) => {
    e.target.closest('.burger_menu').classList.toggle('active');
});

document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.burger_menu')) {
        bgMenu.classList.remove('active');
    }
})