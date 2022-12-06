gsap.registerPlugin(ScrollTrigger);

gsap.to(".chepo", {
  scrollTrigger: {
    trigger: ".projet",
    markers: true,
    start: "top top",
    end: "bottom bottom",
    pin: ".projet",
    scrub: 2,
  },
  opacity: 1,
  y: 500,
});