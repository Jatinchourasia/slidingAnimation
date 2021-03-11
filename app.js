let controller;
let slideScene;

controller = new ScrollMagic.Controller();
const sliders = document.querySelectorAll(".w");
console.log(sliders);
sliders.forEach((slide, index, slides) => {
  let detail = slide.querySelector(".wdetail");
  let img = slide.querySelector(".wimg");

  const slideTl = gsap.timeline({
    defaults: { duration: 1, ease: "power1.in" },
  });

  slideTl.to(detail, { x: "0%", y: "0%" });
  slideTl.to(img, { x: "0%", y: "0%" }, "-=1");

  slideScene = new ScrollMagic.Scene({
    triggerElement: slide,
    triggerHook: 0.3,
    reverse: false,
  })
    .setTween(slideTl)
    .addIndicators({
      colorStart: "white",
      colorTrigger: "yellow",
      name: "slide",
    })
    .addTo(controller);
});

// function animateSlides() {
//   controller = new ScrollMagic.Controller();

//   const sliders = document.querySelectorAll(".slide");

//   sliders.forEach((slide, index, slides) => {
//     revealImg = slide.querySelector(".reveal-img");
//     revealText = slide.querySelector(".reveal-text");
//     img = slide.querySelector("img");

//     //  gsap.to(select, time, object,"delayed time")

//     const slideTl = gsap.timeline({
//       defaults: { duration: 1, ease: "power2.inOut" },
//     });

//     slideTl.fromTo(revealImg, { x: "0%" }, { x: "100%" });
//     slideTl.fromTo(revealText, { x: "0%" }, { x: "100%" }, "-=0.75");
//     slideTl.fromTo(img, { scale: 2 }, { scale: 1 }, "-=1");

//     slideScene = new ScrollMagic.Scene({
//       triggerElement: slide,
//       triggerHook: 0.25,
//       reverse: false,
//     })
//       .setTween(slideTl)
//       // .addIndicators({
//       //   colorStart: "white",
//       //   colorTrigger: "yellow",
//       //   name: "slide",
//       // })
//       .addTo(controller);
//   });
// }

// animateSlides();
