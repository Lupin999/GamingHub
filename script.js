document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.game-container img');
  
  images.forEach(image => {
    image.addEventListener('click', () => {
      alert(`You clicked on ${image.alt}`);
    });
  });

  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        window.location.href = 'index.html';
      } else {
        alert('Invalid username or password');
      }
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const email = document.getElementById('email').value;
      const payment = document.getElementById('payment').value;
      alert(`Account created for ${username} with ${payment} payment method.`);
      // Save user data to local storage or send to server
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      window.location.href = '#profile';
    });
  }

  const profileUsername = document.getElementById('profileUsername');
  const profileEmail = document.getElementById('profileEmail');
  if (profileUsername && profileEmail) {
    profileUsername.textContent = `Username: ${localStorage.getItem('username')}`;
    profileEmail.textContent = `Email: ${localStorage.getItem('email')}`;
  }

  const logoutButton = document.getElementById('logoutButton');
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.clear();
      window.location.href = '#login-signup';
    });
  }
});

function openTab(evt, tabName) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
  });

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(tabButton => {
    tabButton.classList.remove('active');
  });

  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// Open the login tab by default
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tab-button').click();
});