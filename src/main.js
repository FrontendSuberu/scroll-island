import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const scrollIsland = document.querySelector('[data-scroll-island="closed"]');

document.addEventListener("DOMContentLoaded", () => {
  //open scroll island
  scrollIsland.addEventListener("click", (e) => {
    e.stopPropagation(); //prevents event bubbling
    scrollIsland.setAttribute("data-scroll-island", "open");
  });

  //open scroll island
  document.body.addEventListener("click", () => {
    scrollIsland.setAttribute("data-scroll-island", "closed");
  });

  gsap.registerPlugin(ScrollTrigger);

  //progress logic
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
    scrub: 2,
    onUpdate: (self) => {
      const p = self.progress;
      gsap.set("[data-island-indicator]", {
        yPercent: `${300 * p}`,
      });
    },
  });
});
