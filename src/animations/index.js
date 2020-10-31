import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const timeline = {
  opacity: (trigger = '') => {
    return gsap.timeline({
      defaults: {
        scrollTrigger: trigger,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      },
    });
  },
};

export const transition = {
  leftToRight: (selector, scrollTrigger = selector) => {
    return gsap.from(selector, {
      scrollTrigger,
      x: 540,
      duration: 1.5,
      stagger: 0.2,
      ease: 'back.inOut(1.7)',
    });
  },
  rightToLeft: (selector, scrollTrigger = selector) => {
    return gsap.from(selector, {
      scrollTrigger,
      x: -540,
      duration: 1.5,
      stagger: 0.2,
      ease: 'back.inOut(1.7)',
    });
  },
  scaleZero: (selector, scrollTrigger = selector) => {
    return gsap.from(selector, {
      scrollTrigger,
      scale: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: 'elastic.out(3, 1)',
    });
  },
  opacityZero: (selector, scrollTrigger = selector) => {
    return gsap.from(selector, {
      scrollTrigger,
      opacity: 0,
      duration: 3,
      ease: 'back.inOut(1.7)',
    });
  },
  scaleAndOpacityZero: (selector, scrollTrigger = selector) => {
    return gsap.from(selector, {
      scrollTrigger,
      scale: 0,
      opacity: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: 'power1.inOut',
    });
  },
};
