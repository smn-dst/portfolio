import '@styles/main.scss';

import gsap from 'gsap';
import Highway from '@dogstudio/highway';
import LoconativeScroll from 'loconative-scroll';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Sample from './Pages/sample';
import Home from './Pages/home';
import Projects from './Pages/projects';
import DefaultTransition from './Transitions/default-transition';

gsap.registerPlugin(ScrollTrigger);

class App {
  constructor() {
    this.initHighway().then(this.init.bind(this));
  }

  init() {
    this.loconative = new LoconativeScroll();

    this.checkAnchor();

    this.addEvents();

    gsap.ticker.add(this.raf.bind(this));

    window.requestAnimationFrame(this.raf.bind(this));
  }

  initHighway() {
    this.highway = new Highway.Core({
      renderers: {
        page: Sample,
        home: Home,
        projects: Projects,
      },
      transitions: {
        default: DefaultTransition,
      },
    });

    return this.setCurrentRenderer();
  }

  setCurrentRenderer() {
    return new Promise((resolve) => {
      this.highway.properties.renderer.then(() => {
        this.currentRenderer = this.highway.To
          ? this.highway.To
          : this.highway.From;

        resolve(this.currentRenderer);
      });
    });
  }

  onResize(event) {
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document.
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    this.currentRenderer.onResize(event);
    ScrollTrigger.refresh();
  }

  onScroll(event) {
    this.currentRenderer.onScroll(event);
  }

  raf(time) {
    this.currentRenderer.raf(time);

    window.requestAnimationFrame(this.raf.bind(this));
  }

  onNavigateOut() {}

  onNavigateIn({ to, location }) {
    this.setCurrentRenderer().then((renderer) => {
      document.title = renderer.properties.page.title;
    });
  }

  onNavigateEnd({ to, location }) {
    this.checkAnchor();
  }

  onRedirect(event) {
    this.highway.redirect(event.detail.url);
  }

  onDeleteCache(event) {
    this.highway.cache.delete(event.detail.url);
  }

  checkAnchor() {
    const anchor = window.location.anchor || window.location.hash;

    if (anchor) {
      if (anchor === '#') {
        return;
      }

      const element = document.querySelector(anchor);
      if (!element) {
        return;
      }

      const scroll = { y: window.scrollY, x: window.scrollX };

      gsap.to(scroll, {
        y: element.offsetTop,
        duration: 1,
        ease: 'power2.out',
        onUpdate: () => {
          window.scrollTo(0, scroll.y);
        },
      });
    }
  }

  addEvents() {
    window.addEventListener('resize', this.onResize.bind(this), {
      passive: true,
    });

    // loconative events
    this.loconative.on('scroll', this.onScroll.bind(this));

    // Highway events
    this.highway.on('NAVIGATE_OUT', this.onNavigateOut.bind(this));
    this.highway.on('NAVIGATE_IN', this.onNavigateIn.bind(this));
    this.highway.on('NAVIGATE_END', this.onNavigateEnd.bind(this));
    window.addEventListener('highwayredirect', this.onNavigateEnd.bind(this));
    window.addEventListener('highwaydeletecache', this.onRedirect.bind(this));
  }
}

window.onload = () => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  const app = new App();
  app.init();
};
