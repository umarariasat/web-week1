
// Mobile Menu


const menuBtn = document.getElementById("menuBtn") as HTMLButtonElement;
const mobileMenu = document.getElementById("mobileMenu") as HTMLDivElement;

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("hidden");

    if (menuBtn.innerHTML === "☰") {
        menuBtn.innerHTML = "☰";
    } else {
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

const testimonial=document.querySelectorAll<HTMLElement>(".testimonial")
const prevBtn = document.getElementById("prev") as HTMLButtonElement;
const nextBtn = document.getElementById("next") as HTMLButtonElement;
let currentIndex = 0;
const visibleCards = 3;
function showtestimonial(){

    testimonial.forEach(card=>

    {
    card.style.display="none";
    }
    )
    for (
        let i = currentIndex;
        i < currentIndex + visibleCards && i <  testimonial.length;
        i++
    ) {
      ( testimonial[i] as HTMLElement).style.display = "block";
    }

   

 nextBtn.addEventListener("click",()=>{
       if(currentIndex + visibleCards <  testimonial.length) {
        currentIndex++;
        showtestimonial();   
   
       }
    } )
}
prevBtn.addEventListener("click",()=>
{
if(currentIndex>0){
    currentIndex--;
     showtestimonial();
}
}



)
 showtestimonial();
console.log(" JS is connected!");


const counters = document.querySelectorAll<HTMLElement>(".counter");
const aboutSection = document.getElementById("about") as HTMLElement;

const observer = new IntersectionObserver((entries) => {

const entry = entries[0];

if (!entry) return;

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

const elements = document.querySelectorAll<HTMLElement>(".animate-on-scroll");

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


const aboutImage = document.querySelector<HTMLElement>(".about-img");

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.remove(
                "opacity-0",
                "scale-75",
                "rotate-6"
            );

            entry.target.classList.add(
                "opacity-100",
                "scale-100",
                "rotate-0"
            );

        }
    });
}, {
    threshold: 0.3
});

if (aboutImage) {
    observer3.observe(aboutImage);
}

const title = document.querySelector<HTMLElement>(".animate-title");

setTimeout(() => {
    title?.classList.remove("opacity-0", "translate-y-16");
    title?.classList.add("opacity-100", "translate-y-0");
}, 300);