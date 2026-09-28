// Countdown Date
const targetDate = new Date("October 15, 2026 00:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = launchDate - now;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");


    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

    }

}, 1000);


// Email form
const form = document.getElementById("signup-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    document.getElementById("message").textContent =
        "Thank you! You are on the list.";

    console.log("Email:", email);

    form.reset();

});