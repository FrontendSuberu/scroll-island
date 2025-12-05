import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const scrollIsland = document.querySelector('[data-scroll-island="closed"]');


//open scroll island
const openScrollIsland = () => {
  scrollIsland.addEventListener("click", (e) => {
    e.stopPropagation(); //prevents event bubbling
    scrollIsland.setAttribute("data-scroll-island", "open");
  });
};

//open scroll island
const closeScrollIsland = () => {
  document.body.addEventListener("click", () => {
    scrollIsland.setAttribute("data-scroll-island", "closed");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();

  tl.to("[data-scroll-indicator]", {
    strokeDashoffset: "0%",
    duration: 1,
  });

  ScrollTrigger.create({
    trigger: "[data-scroll-container]",
    start: "top top",
    end: "bottom bottom",
    // markers: true,
    animation: tl,
    scrub: 1,
  });

  openScrollIsland();
  closeScrollIsland();
});
