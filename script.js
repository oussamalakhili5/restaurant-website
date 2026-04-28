const reservationForm = document.getElementById("reservation-form");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your table has been reserved.");
});