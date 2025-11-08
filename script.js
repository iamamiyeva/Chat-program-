const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



function register() {

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Save user to localStorage
      localStorage.setItem('user', JSON.stringify({ name, email, password }));

      // Redirect to main page
      window.location.href = 'new-index-last.html';
    }


    function login() {
      const name = document.getElementById('name').value.trim();
      const password = document.getElementById('password').value.trim();

      // Retrieve user from localStorage
      const user = JSON.parse(localStorage.getItem('user'));

      // Check if user exists and password matches
      if (user.name === email && user.password === password) {
        // Redirect to main page
        window.location.href = 'new-index-last.html';
      } else {
        alert('Invalid username or password');
      }
    }

      const user = {
        uid: "some-unique-id", 
        name: "Ali"
      };
      localStorage.setItem("user", JSON.stringify(user));
