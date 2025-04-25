document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.querySelector(".payment-form form");

    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Example validation logic
        const cardNumber = document.getElementById("card-number").value;
        const expiryDate = document.getElementById("expiry-date").value;
        const cvv = document.getElementById("cvv").value;

        if (!cardNumber || !expiryDate || !cvv) {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Payment submitted successfully!");
        paymentForm.reset();
    });
});