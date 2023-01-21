const btnMenu = document.querySelector(".main-menu");
const sideBar = document.querySelector(".sidebar-nav");
const mainOnMenu = document.querySelector(".main-container");
const navbarOnMenu = document.querySelector(".navbar");

// Offcanvas bar constant
const dashboard = document.querySelector(".dashboard");
const passengers = document.querySelector(".passengers");
const schedule = document.querySelector(".schedule");
const seat = document.querySelector(".seat");

// Main conatainers conastants
const dashboardMainContainers = document.querySelector(
  ".dashboard-main-container"
);
const passengersMainContainers = document.querySelector(
  ".passengers-main-container"
);
const scheduleMainContainers = document.querySelector(
  ".schedule-main-container"
);
const seatMainContainers = document.querySelector(".seat-main-container");

btnMenu.addEventListener("click", function () {
  sideBar.classList.toggle("reduced-size");
  mainOnMenu.classList.toggle("main-on-menu");
  navbarOnMenu.classList.toggle("main-on-menu");
  passengersMainContainers.classList.toggle("main-on-menu");
  seatMainContainers.classList.toggle("main-on-menu");
  scheduleMainContainers.classList.toggle("main-on-menu");
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

// When the dashboard button clicked

dashboard.addEventListener("click", function () {
  dashboardMainContainers.classList.remove("hidden");
  passengersMainContainers.classList.add("hidden");
});

// When the dashboard button clicked

dashboard.addEventListener("click", function () {
  dashboardMainContainers.classList.remove("hidden");
  passengersMainContainers.classList.add("hidden");
  scheduleMainContainers.classList.add("hidden");
  seatMainContainers.classList.add("hidden");
});

// When the passengers button clicked

passengers.addEventListener("click", function () {
  passengersMainContainers.classList.remove("hidden");
  dashboardMainContainers.classList.add("hidden");
  scheduleMainContainers.classList.add("hidden");
  seatMainContainers.classList.add("hidden");
});

// When the schedule button clicked

schedule.addEventListener("click", function () {
  scheduleMainContainers.classList.remove("hidden");
  passengersMainContainers.classList.add("hidden");
  dashboardMainContainers.classList.add("hidden");
  seatMainContainers.classList.add("hidden");
});

// when the seat button clicked
seat.addEventListener("click", function () {
  seatMainContainers.classList.remove("hidden");
  scheduleMainContainers.classList.add("hidden");
  passengersMainContainers.classList.add("hidden");
  dashboardMainContainers.classList.add("hidden");
});
