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
menuText3.addEventListener("click", function () {
  menuText3.classList.toggle("active-link");
  menuText1.classList.toggle("active-link");
});

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
