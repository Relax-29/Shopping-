const container = document.getElementById('container');
const panel = document.getElementById('togglePanel');
const toggleBtn = document.getElementById('toggleBtn');
const signinLink = document.getElementById('signin');
const signupLink = document.getElementById('signup');

let signUpMode = false;

// Common function to update the panel
function updatePanel(mode) {
  if (mode === 'signup') {
    container.classList.add('active');
    panel.innerHTML = `
      <h2>Welcome Back!</h2>
      <p>To keep connected with us<br>please login with your personal info</p>
      <button id="toggleBtn">SIGN IN</button>
    `;
    panel.style.backgroundColor = "rgba(245, 88, 88, 1)";
    signUpMode = true;
  } else {
    container.classList.remove('active');
    panel.innerHTML = `
      <h2>Hello, Friend!</h2>
      <p>Enter your personal details<br>and start your journey with us</p>
      <button id="toggleBtn">SIGN UP</button>
    `;
    panel.style.backgroundColor = "rgba(131, 58, 180, 1)";
    signUpMode = false;
  }

  // Re-bind toggleBtn
  document.getElementById('toggleBtn').addEventListener('click', () => {
    updatePanel(signUpMode ? 'signin' : 'signup');
  });
}

// Toggle button inside the login panel
toggleBtn.addEventListener('click', () => {
  updatePanel(signUpMode ? 'signin' : 'signup');
});

// Nav bar buttons
signinLink.addEventListener('click', (e) => {
  e.preventDefault();
  updatePanel('signin');
  
});

signupLink.addEventListener('click', (e) => {
  e.preventDefault();
  updatePanel('signup');
});
