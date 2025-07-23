var line1 = document.querySelector(".line1");
var line2 = document.querySelector(".line2");
var menu = document.querySelector(".menu");
var signin = document.querySelector("#signin");
var signup = document.querySelector("#signup");
var loginPage = document.querySelector(".login-body");

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

var init = 0;

// Helper function to open login page with correct mode
function openLogin(mode) {
  loginPage.style.display = "flex";
  init = 1;

  // Update panel based on mode
  const panel = document.getElementById("togglePanel");
  const container = document.getElementById("container");

  if (mode === "signin") {
    container.classList.remove("active");
    panel.innerHTML = `
      <h2>Hello, Friend!</h2>
      <p>Enter your personal details<br>and start your journey with us</p>
      <button id="toggleBtn">SIGN UP</button>
    `;
    panel.style.backgroundColor = "rgba(131, 58, 180, 1)";
  } else {
    container.classList.add("active");
    panel.innerHTML = `
      <h2>Welcome Back!</h2>
      <p>To keep connected with us<br>please login with your personal info</p>
      <button id="toggleBtn">SIGN IN</button>
    `;
    panel.style.backgroundColor = "rgba(245, 88, 88, 1)";
  }

  // Rebind button
  document.getElementById('toggleBtn').addEventListener('click', () => {
    openLogin(mode === "signin" ? "signup" : "signin");
  });
}

signin.addEventListener("click", function (e) {
  e.preventDefault();
  if (init === 0) {
    openLogin("signin");
  }
});

signup.addEventListener("click", function (e) {
  e.preventDefault();
  if (init === 0) {
    openLogin("signup");
  }
  
});