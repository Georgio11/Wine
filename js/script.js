//Burger
const iconMenu = document.querySelector('.header__menu-icon');
if (iconMenu){
    const menu = document.querySelector('.menu__list');
    iconMenu.addEventListener("click", function(e){
        iconMenu.classList.toggle('_active');
        menu.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
}