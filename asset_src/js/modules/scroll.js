import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//ningen scroll trigger
gsap.to('.js-ningen', { 
    bottom: '-90%',
    scale:'.7',
    scrollTrigger: {
      trigger: '.top',
      start: 'top top',
      end: 'bottom 20%',
      scrub: true,
    }
});

gsap.to('.about', { 
    scrollTrigger: {
        trigger: '.about',
        toggleClass:'js-active',
        start: 'top 20%',
    }
});

