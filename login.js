document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const storedUser = JSON.parse(localStorage.getItem("user"));
  
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to home page after successful login
    } else {
      alert("Invalid email or password!");
    }
  });
  