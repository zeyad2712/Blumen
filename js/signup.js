function validateSignupForm() {
    // Get form elements
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Regular expressions for validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate username
    if (username.trim() === "") {
        alert("Please enter your username.");
        return false;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validate password
    if (password.trim() === "") {
        alert("Please enter your password.");
        return false;
    }

    // Validate confirm password
    if (confirmPassword.trim() === "") {
        alert("Please confirm your password.");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Save user data in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    // If all validations pass
    alert("Signup successful!");

    // Redirect to login page
    window.location.href = "login.html";

    return true;
}


var icon1 = document.getElementById('icon1');
var icon2 = document.getElementById('icon2');

icon1.onclick = function () {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }

    var confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    };

    icon1.classList.toggle("d-none");
    icon2.classList.toggle("d-none");
}


icon2.onclick = function () {
    var password = document.getElementById("password");
    if (password.type === "text") {
        password.type = "password";
    } else {
        password.type = "text";
    }

    var confirmPassword = document.getElementById("confirmPassword");
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    };

    icon1.classList.toggle("d-none");
    icon2.classList.toggle("d-none");
};
