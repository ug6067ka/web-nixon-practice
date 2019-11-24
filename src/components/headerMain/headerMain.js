export default function headerMain() {
    var mobileMenu = document.querySelector(".header__mobile-menu");
    var menuContainer = document.querySelector(".header-menu_container");
    var burgerMenu = document.querySelector(".header__burger-menu");
    mobileMenu.addEventListener("click", function() {
        menuContainer.classList.toggle("header-menu_container--show-menu");
        burgerMenu.classList.toggle("header__burger-menu--active");
    });
}
