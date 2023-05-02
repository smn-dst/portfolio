export default class AbstractBlock {
  constructor(el) {
    this.el = el;

    this.addEvents();
  }

  addEvents() {}

  onScroll(event) {}

  onResize(event) {}

  destroy() {}
}
