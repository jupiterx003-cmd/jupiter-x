// ========================================
// JUPITER X
// Main JavaScript
// ========================================


// Wait until the webpage is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("JUPITER X website loaded successfully.");

});


// ========================================
// Navigation link effect
// ========================================

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log("JUPITER X navigation:", link.textContent);

    });

});


// ========================================
// Button interaction
// ========================================

const buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        console.log("JUPITER X button clicked.");

    });

});


// ========================================
// Simple scroll effect
// ========================================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(0, 0, 0, 0.95)";

    } else {

        header.style.background =
            "rgba(5, 5, 5, 0.90)";

    }

});
