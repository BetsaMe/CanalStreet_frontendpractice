$(document).ready(function ($) {
  $(".home").first().addClass("open");
  $("#food-section").css("display", "none");
  gsap.from(".big-photo", {
    scrollTrigger: {
      trigger: ".big-photo",
      start: "top center",
      end: "top, 100px",
    },
    opacity: 0,
    duration: 1.5,
  });
  gsap.from("#kind-market > .grid-photos", {
    scrollTrigger: {
      trigger: ".grid-photos",
      start: "top 500px",
      end: "top, 100px"
    },
    opacity: 0,
    duration: 1.5,
  });
});

// menu vertical
var tl = gsap.timeline();
tl.to(".item-red", { y: "0", duration: 0.2 })
  .to(".item-blue", { y: "0", duration: 0.2 })
  .to(".item-yellow", { y: "0", duration: 0.2 })
  .to("h1", { opacity: 1, duration: 1.3, ease: Power1.easeOut }, ">");

// menu open&close
$(".panel").click(function () {
  $(".panel").removeClass("open");
  $(this).toggleClass("open");
  $(".panel > p, .panel > span").css("opacity", 1);
  $(this).children("p, span").css("opacity", 0);
});

$(".panel.open").click(function () {
  $(this).removeClass("open");
});

// logo animation
$(".item-yellow, .item-blue, .item-red").click(function () {
  gsap.to(".home-content", 0.3, { display: "none", opacity: 0});
  gsap.to(".logo", {
    height: "40px",
    width: "40px",
    left: "10px",
    duration: 0.3,
  });
});

$(".home").click(function () {
  gsap.to(".logo", {
    height: "70px",
    width: "70px",
    left: "60px",
    duration: 0.3,
  });
  gsap.to("#food-section", 0, { display: "none", opacity: 0 });
  gsap.to("footer, main", { "margin-left": "0", duration: 0.1 });
  gsap.to(".home-content", 0.8, { display: "block", opacity: 1});
});

$(".item-yellow").click(() => { 
  let tl = gsap.timeline();
      tl.to("footer", 0, { "display": "none", opacity: 0 })
        .to("footer, main", { "margin-left": "60", duration: 1 })      
        .to("#food-section, footer", 0.5, { display: "block", opacity: 1});
});

$(".item-blue").click(() => {
    gsap.to("footer, main", { "margin-left": "120", duration: 0.1 });
    gsap.to("#food-section", 0, { display: "none", opacity: 0 });
});

$(".item-red").click(() => {
    gsap.to("footer, main", { "margin-left": "180", duration: 0.1 });
    gsap.to("#food-section", 0, { display: "none", opacity: 0 });
});

$(".menu-nav-icon").click(() => {
    gsap.to("footer, main, .logo", 0, { "display": "none", opacity: 0 });
    gsap.to(".menu-movil", 0.5, { display: "block", opacity: 1});
    gsap.to(".menu-nav-icon", 0.5, { opacity: 0});
});


// document.querySelector(".home").onclick = () => toggleMenu;

// gsap.from(".panel", {height: 100, opacity:1, duration: 0.3, stagger: 0.1});


  // gsap.to(".item-yellow, .item-blue, .item-red", { "width": "60", duration: 0.3 });
  // gsap.to(".home", { "width": "100%", duration: 0.3 });

   // gsap.to(".home, .item-blue, .item-red", { "width": "60", duration: 0.3 });
  // gsap.to(".item-yellow", { "width": "100%", duration: 0.3 });

    // gsap.to(".home, .item-yellow, .item-red", { "width": "60", duration: 0.3 });
  // gsap.to(".item-blue", { "width": "100%", duration: 0.3 });

    // gsap.to(".home, .item-yellow, .item-blue", { "width": "60", duration: 0.3 });
  // gsap.to(".item-red", { "width": "100%", duration: 0.3 });