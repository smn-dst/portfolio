import AbstractComponent from './abstract-component.js';

export default class SampleComponent extends AbstractComponent {
  constructor(element) {
    super(element);
  }

  addEvents() {
    super.addEvents();
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
