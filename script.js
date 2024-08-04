const lenis = new Lenis();

lenis.on('scroll', (e) => {
    console.log(e);
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".banner",
        start: "0% 0%",
        end: "100% 50%",
        scrub: true,
        pin: true,
    }
});

tl.to(".rotate-div", {
    rotate: -10,
    scale: 0.8,
}, 'a')

tl.to("#row-div-1", {
    marginTop: "-25%",
}, 'a')

tl.to("#row-div-2", {
    marginTop: "-40%",
}, 'a')

tl.to("#row-div-3", {
    marginTop: "-45%",
}, 'a')

tl.to("#row-div-4", {
    marginTop: "-50%",
}, 'a')

tl.to("#row-div-5", {
    marginTop: "-25%",
}, 'a')

tl.to("#row-div-1", {
    marginTop: "-55%",
}, 'a')

tl.to(".overlay-div h1", {
    opacity: "1",
    delay: 0.2,
}, 'a')

tl.to(".overlay-div", {
    backgroundColor: "#000000c0",
}, 'a')

var t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero",
        start: "0% 75%",
        end: "100% 75%",
        scrub: true,
    }
});

t2.to(".rounded-wrapper", {
    height: 0,
    marginTop: 0
});


let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.text-reveal',
        start: "0% 40%",
        end: "55% 40%",
        scrub: 1,
    }
})
tl3.to(".text-area-1 ", {
    width: "100%",
    delay: 0.5
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page-4',
        start: "50% 50%",
        end: "200% 50%",
        pin: true,
        scrub: 1,
    }
})
tl4.to("#c-1", {
    marginTop: "-25%",
    opacity: "0.6"
}, 's');
tl4.to("#c-2", {
    opacity: "0.6"
}, 's');
tl4.to("#c-1", {
    marginTop: "-100%",
    opacity: "0"
}, 's-2');
tl4.to("#c-3", {
    opacity: "0.6"
}, 's-3');
tl4.to("#c-2", {
    opacity: "0"
}, 's-3');
tl4.to("#c-1", {
    marginTop: "-150%",
}, 's-3');
tl4.to("#c-4", {
    opacity: "0.6"
}, 's-4');
tl4.to("#c-3", {
    opacity: "0"
}, 's-4');
tl4.to("#c-2", {
    opacity: "0"
}, 's-4');
tl4.to("#c-1", {
    marginTop: "-250%",
    opacity: "0"
},'s-4');
tl4.to(".cir-4", {
    marginLeft: "83%",
    rotate: "360"
}, 's-4');
tl4.to(".cir-4", {
    rotate: "270"
}, 's-3');
tl4.to(".cir-4", {
    rotate: "180"
}, 's-2');
tl4.to(".cir-4", {
    rotate: "90"
}, 's-1');

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.page-5',
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        scrub: 1,
    }
})

tl5.to(".our-work-text", {
    height: "60vh",
}, 'height');
tl5.to(".our-work-div", {
    height: "60vh",
}, 'height');
tl5.to("#our", {
    left: "0",
}, 'height');
tl5.to("#work", {
    right: "0",
}, 'height');
tl5.to(".scroll-work", {
    height: "60vh",
}, 'height');
tl5.to(".scroll-img", {
    height: "60vh",
    marginTop: "-455%"
});