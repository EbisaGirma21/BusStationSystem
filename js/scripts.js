const btnMenu = document.querySelector(".main-menu");
const menuText = document.querySelector(".of-txt");
const menuText1 = document.querySelector(".of-txt1");
const menuText2 = document.querySelector(".of-txt2");
const menuText3 = document.querySelector(".of-txt3");
const menuText4 = document.querySelector(".of-txt4");
const menuText5 = document.querySelector(".of-txt5");
const menuText6 = document.querySelector(".of-txt6");
const menuText7 = document.querySelector(".of-txt7");
const sideBar = document.querySelector(".sidebar-nav");
const mainOnMenu = document.querySelector(".main-container");
const navbarOnMenu = document.querySelector(".navbar");
const stationAdminPage = document.querySelector(".city-name");
btnMenu.addEventListener("click", function () {
  menuText.classList.toggle("hidden");
  menuText1.classList.toggle("hidden");
  menuText2.classList.toggle("hidden");
  menuText3.classList.toggle("hidden");
  menuText4.classList.toggle("hidden");
  menuText5.classList.toggle("hidden");
  menuText6.classList.toggle("hidden");
  menuText7.classList.toggle("hidden");
  sideBar.classList.toggle("reduced-size");
  mainOnMenu.classList.toggle("main-on-menu");
  navbarOnMenu.classList.toggle("main-on-menu");
});

console.log(document.querySelector('.city-name').textContent)