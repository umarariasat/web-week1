// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    if (menuBtn.innerHTML === "☰") {
        menuBtn.innerHTML = "☰";
    }
    else {
        menuBtn.innerHTML = "☰";
    }
});
// Close Mobile Menu
const mobileLinks = document.querySelectorAll("#mobileMenu a");
mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuBtn.innerHTML = "☰";
    });
});
const testimonial = document.querySelectorAll(".testimonial");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
let currentIndex = 0;
const visibleCards = 3;
function showtestimonial() {
    testimonial.forEach(card => {
        card.style.display = "none";
    });
    for (let i = currentIndex; i < currentIndex + visibleCards && i < testimonial.length; i++) {
        testimonial[i].style.display = "block";
    }
    nextBtn.addEventListener("click", () => {
        if (currentIndex + visibleCards < testimonial.length) {
            currentIndex++;
            showtestimonial();
        }
    });
}
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        showtestimonial();
    }
});
showtestimonial();
console.log(" JS is connected!");
const counters = document.querySelectorAll(".counter");
const aboutSection = document.getElementById("about");
const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (!entry)
        return;
    if (entry.isIntersecting) {
        counters.forEach(counter => {
            const target = Number(counter.dataset.target);
            const suffix = counter.dataset.suffix ?? "";
            let current = 0;
            const speed = 20;
            const updateCounter = () => {
                if (current < target) {
                    current++;
                    if (current > target) {
                        current = target;
                    }
                    counter.innerText = current + suffix;
                    setTimeout(updateCounter, speed);
                }
            };
            updateCounter();
        });
        observer.unobserve(aboutSection);
    }
}, {
    threshold: 0.8
});
observer.observe(aboutSection);
const elements = document.querySelectorAll(".animate-on-scroll");
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
        }
    });
}, {
    threshold: 0.2,
});
elements.forEach((el) => observer2.observe(el));
const aboutImage = document.querySelector(".about-img");
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "scale-75", "rotate-6");
            entry.target.classList.add("opacity-100", "scale-100", "rotate-0");
        }
    });
}, {
    threshold: 0.3
});
if (aboutImage) {
    observer3.observe(aboutImage);
}
const title = document.querySelector(".animate-title");
setTimeout(() => {
    title?.classList.remove("opacity-0", "translate-y-16");
    title?.classList.add("opacity-100", "translate-y-0");
}, 300);

//# sourceMappingURL=gym.js.map