document.addEventListener("DOMContentLoaded", () => {
    const bookingForm = document.querySelector(".booking-form form");

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const location = document.getElementById("location").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const duration = document.getElementById("duration").value;

        if (!location || !date || !time || !duration) {
            alert("Please fill in all required fields.");
            return;
        }

        alert(`Booking confirmed for ${location} on ${date} at ${time} for ${duration} hours.`);
        bookingForm.reset();
    });
});