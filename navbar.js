var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var menu = document.querySelector(".menu");
var signin = document.querySelector("#signin");
var signup = document.querySelector("#signup");
var loginPage = document.querySelector(".login-container");
var sign = document.querySelector(".sign");
var close = document.querySelector(".closed");
var blur = document.querySelector(".blur");
var menubar = document.querySelector(".menubar");

var flag = 0;
menu.addEventListener("click", function () {
  if (flag === 0) {
    line1.style.transform = "rotate(40deg)";
    line1.style.width = "3.5vw";
    line2.style.width = "3.5vw";
    line2.style.transform = "rotate(-40deg)";
    flag = 1;
  } else {
    line1.style.transform = "rotate(0deg)";
    line1.style.width = "2.3vw";
    line2.style.transform = "rotate(0deg)";
    flag = 0;
  }
});

signin.addEventListener("click", function () {
  loginPage.style.display = "block";
  blur.style.display = "block";
  document.querySelector(".login-body").style.zIndex = "9999";
  document.querySelector(".blur").style.zIndex = "9998";
  document.querySelector(".login-container").style.zIndex = "9999";
  document.querySelector(".closed").style.zIndex = "99999";
  setTimeout(() => {
    loginPage.classList.add("show");
    blur.classList.add("show");
  }, 10);

  document.body.style.overflow = "hidden";
  close.style.color = "#fff";
  updatePanel("signin");
});

signup.addEventListener("click", function () {
  loginPage.style.display = "block";
  blur.style.display = "block";
  document.querySelector(".login-body").style.zIndex = "9999";
  document.querySelector(".blur").style.zIndex = "9998";
  document.querySelector(".login-container").style.zIndex = "9999";
  document.querySelector(".closed").style.zIndex = "99999";

  setTimeout(() => {
    loginPage.classList.add("show");
    blur.classList.add("show");
  }, 10);

  document.body.style.overflow = "hidden";
  close.style.color = "black";
  updatePanel("signup");
});

close.addEventListener("click", function () {
  loginPage.classList.remove("show");
  blur.classList.remove("show");
    document.querySelector(".login-body").style.zIndex = "auto";
  document.querySelector(".blur").style.zIndex = "auto";
  document.querySelector(".login-container").style.zIndex = "auto";
  document.querySelector(".closed").style.zIndex = "auto";

  setTimeout(() => {
    loginPage.style.display = "none";
    blur.style.display = "none";
  }, 400); // match the transition duration
  document.body.style.overflow = "auto";
});

var init = 0;
menu.addEventListener("click", function () {
  if (init === 0) {
    menubar.style.opacity = "1";
    menubar.style.zIndex = "1000";
    init = 1;
  } else {
    menubar.style.opacity = "0";
    menubar.style.zIndex = "auto";
    init = 0;
  }
});