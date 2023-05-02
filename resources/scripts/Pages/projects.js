import AbstractPage from './abstract-page.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default class Projects extends AbstractPage {
  onEnter() {
    super.onEnter();
    this.intro();
    this.initSplitProject();
    this.initFixedSection();
    this.initImgParallax();
  }

  intro() {
    this.datasProjects = [];
    this.section = this.view.querySelector('.presentation--section');
    this.presentation = this.view.querySelector('.presentation');
    this.imgParallax = this.view.querySelectorAll('.img-parallax');
  }

  addEvents() {}

  initSplitProject() {
    const ourText = new SplitType('.js-split-text', { types: 'chars' });
    const chars = ourText.chars;
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        chars,
        {
          y: 45,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.02,
          duration: 0.35,
          ease: 'power4.out',
        },
        0
      )
      .fromTo(
        '.js-project-split-title',
        {
          y: 100,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.5,
          duration: 2.5,
          ease: 'power4.out',
        },
        '-=2.3'
      );
  }

  initFixedSection() {
    ScrollTrigger.create({
      trigger: this.section,
      start: 'top top',
      end: 'bottom top',
      endTrigger: this.presentation,
      pin: true,
      scrub: 0.5,
      pinSpacing: false,
    });
  }

  initImgParallax() {
    gsap.utils.toArray(this.imgParallax).forEach(function (container) {
      let image = container.querySelector('img');

      gsap.to(image, {
        y: () => image.offsetHeight - container.offsetHeight,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
          invalidateOnRefresh: true,
        },
      });
    });
  }

  onScroll(event) {
    super.onScroll(event);
  }

  onResize(event) {
    super.onResize(event);
  }

  raf(time) {
    super.raf(time);
  }

  destroy() {
    this.datasProjects.forEach((dataProject) => {
      dataProject.scrollTrigger.refresh();
    });
  }
}
