const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
    (char,i) => 
        `<span style="transform:rotate(${i * 6.9}deg)">${char}</span>`
).join('');

const lenis = new Lenis({
  duration: 2.2,
  smoothWheel: true,
})

lenis.stop();

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let tl=gsap.timeline()

tl.from('#im1',{
    scale:0,
    duration:0.25
})

tl.from('#im2',{
    scale:0,
    duration:0.25
})

tl.from('#im3',{
    scale:0,
    duration:0.25
})

tl.from('#im4',{
    scale:0,
    duration:0.25
})

tl.from('#im5',{
    scale:0,
    duration:0.25
})

tl.from('#im6',{
    scale:0,
    duration:0.25
})

tl.from('#im7',{
    scale:0,
    duration:0.25
})

gsap.registerPlugin(SplitText);
let mySplit = SplitText.create('.gwc',{type:'chars'});
let chars = mySplit.chars;

gsap.from(chars,{
    y:600,
    stagger:0.1,
    duration:1.25
})

tl.to(chars,{
    delay:2,
    y:-300,
    stagger:0.1,
    duration:1.25
})

tl.to('#im7',{
    scale:0,
    duration:0.1
})

tl.to('#im6',{
    scale:0,
    duration:0.1
})

tl.to('#im5',{
    scale:0,
    duration:0.1
})

tl.to('#im4',{
    scale:0,
    duration:0.1
})

tl.to('#im3',{
    scale:0,
    duration:0.1
})

tl.to('#im2',{
    scale:0,
    duration:0.1
})

tl.to('#im1',{
    scale:0,
    duration:0.1
})

tl.to('.preloader',{
    opacity:0,
    duration:1,
    zIndex:0
})

tl.from('.vidbox video',{
    rotate:'45deg',
    duration:2,
    opacity:0
},'<')

tl.from('.navbar',{
    opacity:0,
    duration:2
},'<')

tl.from('.text p',{
    opacity:0,
    duration:2
},'<')

tl.call(() => {
    lenis.start();
})

gsap.registerPlugin(ScrollTrigger);

/*gsap.utils.toArray('.imageClass img').forEach((img) => {
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top 60%',
            toggleActions: 'play none none none',
            markers: true
        },
        scale: 1.3,
        x: -800,
        duration: 1.5,
        ease: 'circ.out'
    });
});*/

gsap.utils.toArray('.imageClass img').forEach((img, i) => {
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play none none none',
            markers:false
        },
        scale:1.3,
        x: -800,
        duration: 1,
        delay: i * 0.15,
        ease: 'circ.out'
    });
});

gsap.utils.toArray('.diffImageClass img').forEach((img, i) => {
    gsap.from(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play none none none',
            markers:false
        },
        scale:1.3,
        x: -800,
        duration: 1,
        delay: i * 0.15,
        ease: 'circ.out'
    });
});

gsap.to('.footer img',{
    rotate:'360deg',
    repeat:-1,
    duration:45
})

gsap.to('.circle',{
    rotate:'360deg',
    duration:60,
    repeat:-1
})

