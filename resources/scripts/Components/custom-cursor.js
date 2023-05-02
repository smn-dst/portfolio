import AbstractComponent from './abstract-component.js';
import { gsap } from 'gsap';

export default class CustomCursor extends AbstractComponent {
  constructor(element) {
    super(element);
    this.intro();
    this.bindMethods();
    this.addEvents();
  }

  intro() {
    this.bigBall = document.querySelector('.cursor__ball--big');
    this.smallBall = document.querySelector('.cursor__ball--small');
    this.hoverables = document.querySelectorAll('.hoverable');
    this.center = 15;
  }

  bindMethods() {
    this.mousemove = this.mousemove.bind(this);
    this.mouseover = this.mouseover.bind(this);
    this.mouseleave = this.mouseleave.bind(this);
  }

  addEvents() {
    super.addEvents();
    if (this.hoverables === undefined) {
      return;
    }
    document.body.addEventListener('pointermove', this.mousemove);
    for (let i = 0; i < this.hoverables.length; i++) {
      this.hoverables[i].addEventListener('mouseover', this.mouseover);
      this.hoverables[i].addEventListener('mouseleave', this.mouseleave);
    }
  }

  mousemove({ clientX, clientY }) {
    gsap.to(this.bigBall, 0.4, {
      x: clientX - this.center,
      y: clientY - this.center,
    });

    gsap.to(this.smallBall, 0.1, {
      x: clientX - 5,
      y: clientY - 7,
    });
  }

  mouseover() {
    this.center = 15 - 30;
    gsap.to(this.bigBall, 0.3, {
      scale: 4,
    });
  }

  mouseleave() {
    this.center = 15;
    gsap.to(this.bigBall, 0.3, {
      scale: 1,
    });
  }

  onScroll(event) {
    super.onScroll(event);
  }

  onResize(event) {
    super.onResize(event);
  }

  destroy() {
    super.destroy();
  }
}
