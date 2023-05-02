import AbstractBlock from "./abstract-block";

export default class SampleBlock extends AbstractBlock {
    constructor(element)
    {
        super(element);
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

    destroy()
    {
        super.destroy();
    }
}
