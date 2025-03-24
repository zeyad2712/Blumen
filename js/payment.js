function validateForm() {
    // Get form elements
    var cardholderName = document.getElementById("cardholderName").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    // Regular expressions for validation
    var cardNumberPattern = /^\d{16}$/;
    var cvvPattern = /^\d{3,4}$/;

    // Validate cardholder name
    if (cardholderName.trim() === "") {
        alert("Please enter the cardholder name.");
        return false;
    }

    // Validate card number
    if (!cardNumberPattern.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number.");
        return false;
    }

    // Validate expiry date
    if (expiryDate.trim() === "") {
        alert("Please enter the expiry date.");
        return false;
    }

    // Validate CVV
    if (!cvvPattern.test(cvv)) {
        alert("Please enter a valid CVV.");
        return false;
    }

    // If all validations pass
    alert("Payment successful!");

    // Clear the form fields
    document.getElementById("cardholderName").value = "";
    document.getElementById("cardNumber").value = "";
    document.getElementById("expiryDate").value = "";
    document.getElementById("cvv").value = "";

    // Redirect to Home Page
    window.location.href = "index.html";

    return true;
}