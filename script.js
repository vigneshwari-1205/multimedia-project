/* ================= SMOOTH SCROLL ================= */

function scrollToSection(sectionId) {

const section = document.getElementById(sectionId);

if (section) {
    section.scrollIntoView({
        behavior: "smooth"
    });
}

}

/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", function () {

nav.classList.toggle("active");

});

/* Close mobile menu after clicking */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(function (link) {

link.addEventListener("click", function () {

    nav.classList.remove("active");

});

});

/* ================= IMAGE LIGHTBOX ================= */

function openLightbox(imageSource) {

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

lightboxImage.src = imageSource;

lightbox.classList.add("active");

}

function closeLightbox() {

const lightbox =
    document.getElementById("lightbox");

lightbox.classList.remove("active");

}

/* ================= ESCAPE KEY ================= */

document.addEventListener("keydown", function (event) {

if (event.key === "Escape") {

    closeLightbox();

}

});

/* ================= ANIMATED COUNTERS ================= */

const counters =
document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters() {

if (counterStarted) return;

counterStarted = true;

counters.forEach(function (counter) {

    const target =
        Number(counter.getAttribute("data-target"));

    let current = 0;

    const increment =
        Math.max(1, Math.ceil(target / 50));

    const timer =
        setInterval(function () {

            current += increment;

            if (current >= target) {

                counter.textContent = target + "+";

                clearInterval(timer);

            } else {

                counter.textContent = current;

            }

        }, 30);

});

}

/* Start counter when user reaches stats */

const statsSection =
document.querySelector(".stats-section");

window.addEventListener("scroll", function () {

const sectionTop =
    statsSection.getBoundingClientRect().top;

const screenHeight =
    window.innerHeight;

if (sectionTop < screenHeight - 100) {

    startCounters();

}

/* ================= SCROLL REVEAL OBSERVER ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(function (entries) {

entries.forEach(function (entry) {

    if (entry.isIntersecting) {

        entry.target.classList.add("active");

    }

});

}, { threshold: 0.15 });

revealElements.forEach(function (element) {

revealObserver.observe(element);

});

/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

if (window.scrollY > 40) {

    navbar.classList.add("scrolled");

} else {

    navbar.classList.remove("scrolled");

}

});

});


/* ================= SCROLL TO TOP BUTTON ================= */

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {

if (window.scrollY > 400) {

    scrollTopBtn.classList.add("show");

} else {

    scrollTopBtn.classList.remove("show");

}

});