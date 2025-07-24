var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var menu = document.querySelector(".menu");
var signin = document.querySelector("#signin");
var signup = document.querySelector("#signup");
var loginPage = document.querySelector(".login-container");
var sign = document.querySelector(".sign");
var close = document.querySelector(".closed");
var blur = document.querySelector(".blur");

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
  document.body.style.overflow = "hidden";
  close.style.color = "#fff";
  close.style.transition = "all 0.5s ease-in-out";
  blur.style.display = "block";
  blur.style.transition = "all 0.5s ease-in-out";
  updatePanel("signin");
});

signup.addEventListener("click", function () {
  loginPage.style.display = "block";
  document.body.style.overflow = "hidden";
  close.style.color = "black";
  blur.style.display = "block";
  blur.style.transition = "all 0.5s ease-in-out";
  updatePanel("signin");
});

close.addEventListener("click", function () {
  loginPage.style.display = "none";
  document.body.style.overflow = "auto";
  blur.style.display = "none";
  blur.style.transition = "all 0.5s ease-in-out";
});
