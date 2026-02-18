const toggleMenu = document.querySelector(".toggle_menu");
const HeaderNav = document.querySelector(".header_nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  HeaderNav.classList.toggle("open");
});
