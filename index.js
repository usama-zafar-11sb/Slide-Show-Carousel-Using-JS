let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let timer;

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function changeSlide(n) {
    clearInterval(timer); // Clear the current timer to prevent overlap
    showSlide(slideIndex + n);
    timer = setInterval(() => changeSlide(1), 5000); // Restart the timer
}

function autoSlide() {
    showSlide(slideIndex + 1);
    timer = setInterval(() => changeSlide(1), 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex);
    timer = setInterval(() => changeSlide(1), 5000);
});
