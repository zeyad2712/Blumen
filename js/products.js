function filterProducts() {
    // Get the search input element and its value
    var input = document.getElementById("productSearchInput");
    var filter = input.value.toUpperCase();

    // Get all product elements
    var products = document.getElementsByClassName("product");

    // Loop through all product elements
    for (var i = 0; i < products.length; i++) {
        // Get the product name element within the current product
        var productNameElement = products[i].getElementsByClassName("product-name")[0];

        // If the product name element exists
        if (productNameElement) {
            // Get the text content of the product name element
            var txtValue = productNameElement.textContent || productNameElement.innerText;

            // Check if the product name includes the filter text
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                // If it matches, display the product
                products[i].style.display = "";
            } else {
                // If it doesn't match, hide the product
                products[i].style.display = "none";
            }
        }
    }
}