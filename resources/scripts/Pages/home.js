import AbstractPage from './abstract-page.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

gsap.registerPlugin(ScrollTrigger);
Splitting();

export default class Home extends AbstractPage {
  onEnter() {
    super.onEnter();
    this.intro();
    this.initTitles();
    this.initQuote();
    this.initParallax();
    this.initImgReveal();
  }

  intro() {
    this.datas = [];
    this.titles = this.view.querySelector('.js-title');
    this.homeCover = this.view.querySelector('.js-home-cover');
    this.imgParallax = this.view.querySelectorAll('.js-img-parallax');
    this.fx2Titles = [
      ...this.view.querySelectorAll(
        '.content__title[data-splitting][data-effect2]'
      ),
    ];
    this.fx3Titles = [
      ...this.view.querySelectorAll(
        '.content__title[data-splitting][data-effect3]'
      ),
    ];
    this.fx2TextsProjects = [
      ...this.view.querySelectorAll(
        '.content__title-projects[data-splitting][data-effect2]'
      ),
    ];
    this.reveal = this.view.querySelectorAll('.reveal');
  }

  initTitles() {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: this.homeCover,
          start: 'top top',
          end: '+=3000',
          scrub: true,
          pin: true,
        },
      })
      .call(() => {
        this.initSplit();
      })
      .to(this.homeCover, { duration: 1.5 })
      .set(this.titles, { innerHTML: 'DOUSSET' }, 0.33)
      .set(this.titles, { innerHTML: 'FRONT END' }, 0.66);
  }

  initParallax() {
    this.imgParallax.forEach((parallax) => {
      gsap.fromTo(
        parallax.querySelector('img'),
        {
          y: 0,
        },
        {
          y: -150,
          ease: 'none',
          scrollTrigger: {
            trigger: parallax,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    });
  }

  initSplit() {
    const ourText = new SplitType('.js-split', { types: 'lines' });
    const chars = ourText.lines;
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        chars,
        {
          y: 100,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.02,
          duration: 2,
          ease: 'power4.out',
        },
        0
      )
      .fromTo(
        '.js-split-title',
        {
          y: 100,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: 0.5,
          duration: 3.5,
          ease: 'power4.out',
        },
        '-=1.5'
      );
  }

  initQuote() {
    this.fx2Titles.forEach((title) => {
      const chars = title.querySelectorAll('.char');

      gsap.fromTo(
        chars,
        {
          'will-change': 'opacity, transform',
          opacity: 0,
          yPercent: 120,
          scaleY: 2.3,
          scaleX: 0.7,
          transformOrigin: '50% 0%',
        },
        {
          duration: 1,
          ease: 'back.inOut(2)',
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          stagger: 0.03,
          scrollTrigger: {
            trigger: title,
            start: 'center bottom+=50%',
            end: 'bottom top+=40%',
            scrub: true,
          },
        }
      );
    });

    this.fx3Titles.forEach((title) => {
      const chars = title.querySelectorAll('.char');

      gsap.fromTo(
        chars,
        {
          'will-change': 'transform',
          transformOrigin: '50% 0%',
          scaleY: 0,
        },
        {
          ease: 'back',
          opacity: 1,
          scaleY: 1,
          yPercent: 0,
          stagger: 0.03,
          scrollTrigger: {
            trigger: title,
            start: 'center bottom-=5%',
            end: 'top top-=0%',
            scrub: true,
          },
        }
      );
    });

    this.fx2TextsProjects.forEach((text) => {
      const chars = text.querySelectorAll('.char');

      gsap.fromTo(
        chars,
        {
          'will-change': 'transform',
          transformOrigin: '50% 0%',
          scaleY: 0,
        },
        {
          ease: 'back',
          opacity: 1,
          scaleY: 1,
          yPercent: 0,
          stagger: 0.03,
          scrollTrigger: {
            trigger: text,
            start: 'center bottom+=10%',
            end: 'bottom top+=55%',
            scrub: true,
          },
        }
      );
    });
  }

  initImgReveal() {
    this.reveal.forEach((container) => {
      let image = container.querySelector('img');
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: 'restart none none reset',
        },
      });

      tl.set(container, { opacity: 1 });
      tl.from(container, 1, {
        xPercent: 0,
      });
      tl.from(image, 1, {
        xPercent: 100,
        scale: 1.6,
        delay: -1,
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
    this.datas.forEach((data) => {
      data.scrollTrigger.refresh();
    });
  }
}
