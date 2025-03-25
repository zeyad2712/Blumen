function validateLoginForm() {
    // Get form elements
    var loginUser = document.getElementById("loginUser").value;
    var loginPassword = document.getElementById("loginPassword").value;

    // Get stored user data from local storage
    var storedUser = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    // Validate email
    if (loginUser.trim() === "") {
        alert("Please enter your Username.");
        return false;
    }

    // Validate password
    if (loginPassword.trim() === "") {
        alert("Please enter your Password.");
        return false;
    }

    // Check if email and password match the stored data
    if (loginUser === storedUser && loginPassword === storedPassword) {
        alert("Login successful!");
        // Redirect to home page
        window.location.href = "index.html";
        return true;
    } else {
        alert("Invalid Username or password.");
        return false;
    }
}