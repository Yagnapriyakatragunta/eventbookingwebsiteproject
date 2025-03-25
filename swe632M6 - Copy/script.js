document.addEventListener("DOMContentLoaded", function() {
    // Register Form Submission
    document.getElementById("registerForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Store user details in localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let userExists = users.some(user => user.email === email);

        if (userExists) {
            alert("User already registered! Please log in.");
            window.location.href = "index.html";
        } else {
            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful! Redirecting to login page.");
            window.location.href = "index.html";
        }
    });

    // Login Form Submission
    document.getElementById("loginForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let loginError = document.getElementById("loginError");

        // Retrieve stored users
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            alert("No credentials found. New user? Please register.");
            window.location.href = "register.html";
        } else {
            alert("Login successful! Redirecting to Home page.");
            window.location.href = "dashboard.html";
        }
    });
});