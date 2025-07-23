var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var menu = document.querySelector(".menu");

var flag = 0
menu.addEventListener("click", function() {
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