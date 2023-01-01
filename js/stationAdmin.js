const btnMenu = document.querySelector(".main-menu");
const sideBar = document.querySelector(".sidebar-nav");
const mainOnMenu = document.querySelector(".main-container");
const navbarOnMenu = document.querySelector(".navbar");
const stationAdminPage = document.querySelector(".city-name");
btnMenu.addEventListener("click", function () {
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
