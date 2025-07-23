  const container = document.getElementById('container');
  const toggleBtn = document.getElementById('toggleBtn');
  const panel = document.getElementById('togglePanel');

  let signUpMode = false;

  toggleBtn.addEventListener('click', () => {
    signUpMode = !signUpMode;
    container.classList.toggle('active');

    // Update panel text + button
    if (signUpMode) {
      panel.innerHTML = `
        <h2>Welcome Back!</h2>
        <p>To keep connected with us<br>please login with your personal info</p>
        <button id="toggleBtn">SIGN IN</button>
      `;
    } else {
      panel.innerHTML = `
        <h2>Hello, Friend!</h2>
        <p>Enter your personal details<br>and start your journey with us</p>
        <button id="toggleBtn">SIGN UP</button>
      `;
    }

    // Re-bind event
    document.getElementById('toggleBtn').addEventListener('click', () => {
      toggleBtn.click();
    });
  });