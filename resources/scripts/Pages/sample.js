import AbstractPage from './abstract-page.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Sample extends AbstractPage {
    onEnter()
    {
        super.onEnter();
        this.intro();
        this.initTitle();
    }

    intro()
    {
        this.title = document.querySelectorAll('.js-title');
    }

    addEvents()
    {
        super.addEvents();
    }

    onScroll(event)
    {
        super.onScroll(event);
    }

    onResize(event)
    {
        super.onResize(event);
    }

    raf(time)
    {
        super.raf(time);
    }

    initTitle()
    {
        gsap.to(this.title, {
            scrollTrigger: {
                start: 'top top-=10%',
                end: '+=150',
                scrub: true,
            },
        });
    }

    destroy()
    {}
}
