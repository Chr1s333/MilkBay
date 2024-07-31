    function updateTotal() {
        var price1 = 65.00; // Replace with actual price of product 1
        var quantity1 = document.getElementById("quantity1").value;
        var total1 = price1 * quantity1;

        var price2 = 20.00; // Replace with actual price of product 2
        var quantity2 = document.getElementById("quantity2").value;
        var total2 = price2 * quantity2;

        var totalPrice = total1 + total2;
        document.getElementById("totalAmount").textContent = "Total Amount: ₹" + totalPrice.toFixed(2);
    }