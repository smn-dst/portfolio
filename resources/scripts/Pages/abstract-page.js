import Highway from '@dogstudio/highway';

import blockList from '../blocks/block-list';
import componentList from '../components/component-list';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default class AbstractPage extends Highway.Renderer {
  onEnter() {
    this.view = this.wrap.lastElementChild;

    this.blocks = [];
    if (blockList && blockList.length) {
      this.initBlocks();
    }

    this.components = [];
    if (componentList && componentList.length) {
      this.initComponents();
    }

    this.addEvents();

    this.view.$page = this;
  }

  /**
   * Initializes the instances of every found blocks in the page's view.
   *
   * @private Called by `this.onEnter()`.
   * @returns {void}
   */
  initBlocks() {
    for (let i = 0; i < blockList.length; i++) {
      const foundBlocks = document.querySelectorAll(
        '.blocks .' + blockList[i].name
      );

      const block = {
        name: blockList[i].name,
        instances: [],
      };

      for (let j = 0; j < foundBlocks.length; j++) {
        const blockInstance = new blockList[i].Class(foundBlocks[j]);
        const instance = {
          el: foundBlocks[j],
          class: blockInstance,
        };

        blockInstance.page = this;

        block.instances.push(instance);
      }

      this.blocks.push(block);
    }
  }

  /**
   * Initializes the instances of every found components in the page's view.
   *
   * @private Called by `this.onEnter()`.
   * @returns {void}
   */
  initComponents() {
    for (let i = 0; i < componentList.length; i++) {
      const foundComponents = document.querySelectorAll(
        '.' + componentList[i].name
      );

      const component = {
        name: componentList[i].name,
        instances: [],
      };

      for (let j = 0; j < foundComponents.length; j++) {
        const componentInstance = new componentList[i].Class(
          foundComponents[j]
        );
        const instance = {
          el: foundComponents[j],
          class: componentInstance,
        };

        componentInstance.page = this;

        component.instances.push(instance);
      }

      this.components.push(component);
    }
  }

  onEnterCompleted() {}

  /**
   * Automatically called when the page has finished its **onLeave** animation and is about to be removed from the DOM.
   *
   * Automatically removes every event added via `this.addEvent()`.
   * Destroys every `Block` instance.
   *
   * @public Called by `Highway`.
   * @returns {void}
   */
  onLeaveCompleted() {
    for (let i = 0; i < this.blocks.length; i++) {
      for (let j = 0; j < this.blocks[i].instances.length; j++) {
        this.blocks[i].instances[j].class.destroy();
      }
    }

    this.destroy();
    ScrollTrigger.refresh();
  }

  onResize(event) {
    for (let i = 0; i < this.blocks.length; i++) {
      for (let j = 0; j < this.blocks[i].instances.length; j++) {
        this.blocks[i].instances[j].class.onResize(event);
      }
    }
  }

  onScroll(event) {}

  raf(time) {}

  addEvents() {}

  destroy() {}
}
