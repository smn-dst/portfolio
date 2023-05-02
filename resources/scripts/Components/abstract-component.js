export default class AbstractComponent {
  constructor(el) {
    this.el = el;

    this.addEvents();
  }

  addEvents() {}

  onScroll(event) {}

  onResize(event) {}

  destroy() {}
}
