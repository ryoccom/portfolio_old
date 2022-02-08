import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const ningen = document.querySelector('.ningen');

//ningen scroll trigger
gsap.to('.js-ningen', { 
    bottom: '-105%',
    scale:'.7',
    scrollTrigger: {
      trigger: '.top',
      start: 'top top',
      end: 'bottom 20%',
      scrub: true,
      onLeave: () => {
        ningen.style.zIndex = '1000';
      },
      onEnterBack: () => {
        ningen.style.zIndex = '3000';
      },
    }
});

gsap.to('.about', { 
    scrollTrigger: {
        trigger: '.about',
        toggleClass:'js-active',
        start: 'top 20%',
    }
});

