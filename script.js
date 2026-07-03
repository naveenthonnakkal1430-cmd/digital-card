// =======================
// ARAR Business Center V2
// =======================

// Image Slider
const images = [
    "photos/reception.jpg",
    "photos/office1.jpg",
    "photos/office2.jpg",
    "photos/office3.jpg",
    "photos/office4.jpg",
    "photos/office5.jpg"
];

let current = 0;

const slide = document.getElementById("slide");

if (slide) {
    setInterval(() => {

        slide.style.opacity = 0;

        setTimeout(() => {

            current++;

            if (current >= images.length) {
                current = 0;
            }

            slide.src = images[current];
            slide.style.opacity = 1;

        }, 300);

    }, 3000);
}

// Smooth fade effect
if (slide) {
    slide.style.transition = "opacity .5s ease";
}

// Gallery Click Preview
const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        slide.src = img.src;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});

// Scroll Animation
const cards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    observer.observe(card);

});

// Button Hover Effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});

console.log("ARAR Business Center Loaded Successfully");