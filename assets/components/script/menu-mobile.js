const $menuMobile = document.querySelector(".menu-mobile");
const $navLink = document.querySelector(".wrap-nav");

$menuMobile.addEventListener("click", () => {
    $navLink.classList.toggle("nav-active");
});

document.querySelectorAll(".header__navigation").forEach(n => n. addEventListener("click", () => {
    $navLink.classList.remove("nav__active");
}));