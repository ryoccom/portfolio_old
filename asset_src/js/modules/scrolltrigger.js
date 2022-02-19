import {
  gsap
} from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const ningen = document.querySelector('.ningen');



ScrollTrigger.defaults({
  scroller: ".mainarea",
  toggleActions: "play pause resume reset"
});

//ningen scroll trigger
ScrollTrigger.matchMedia({
  "(min-width: 1201px)": function () {
    gsap.to('.js-ningen', {
      bottom: '-95%',
      scale: '.7',
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
  },
  "(max-width: 1200px)": function () {
    gsap.to('.js-ningen', {
      bottom: '-102%',
      scale: '.7',
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
  },
  "(max-width: 1023px)": function () {
    gsap.to('.js-ningen', {
      bottom: '-177%',
      scale: '.7',
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
  },
  "(max-width: 819px)": function () {
    gsap.to('.js-ningen', {
      bottom: '-193%',
      scale: '.7',
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
  },


  "(max-width: 767px)": function () {
    gsap.to('.js-ningen', {
      bottom: '-178%',
      scale: '.7',
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
  },

  "all": function () {
    gsap.to('.about', {
      scrollTrigger: {
        trigger: '.about',
        toggleClass: 'js-active',
        start: 'top 20%',
      }
    });
    gsap.to('.js-fade', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.works',
        start: 'top 20%',
        end: 'bottom bottom',
        scrub: true
      }
    });
    gsap.to('.js-ningen2', {
      top: '50%',
      opacity: 1,
      scrollTrigger: {
        trigger: '.works',
        start: 'top 20%',
        end: 'bottom bottom',
        scrub: true,
      }
    });
    gsap.to('.works', {
      scrollTrigger: {
        trigger: '.works',
        toggleClass: 'js-active',
        start: 'top 20%',
      }
    });
    gsap.to('.scroll', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.contact',
        toggleClass: 'js-active',
        start: 'top 20%',
      }
    });
  }
});