<?php

namespace App\View\Composers\Blocks;

use Roots\Acorn\View\Composer;

class Presentation extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'blocks.presentation',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            'titlePresentation' => get_field('title_presentation'),
            'subTextPresentation' => get_field('sub-text_presentation'),
            'textPresentation' => get_field('text_presentation'),
            'textOnePresentation' => get_field('text-one_presentation'),
            'textTwoPresentation' => get_field('text-two_presentation'),
            'imgOnePresentation' => get_field('img-one_presentation'),
            'imgTwoPresentation' => get_field('img-two_presentation'),
            'imgThreePresentation' => get_field('img-three_presentation'),
            'imgFourPresentation' => get_field('img-four_presentation'),
            'imgFivePresentation' => get_field('img-five_presentation'),
            'imgSixPresentation' => get_field('img-six_presentation'),
            'imgSevenPresentation' => get_field('img-seven_presentation'),
            'imgHeightPresentation' => get_field('img-height_presentation'),
            'imgNinePresentation' => get_field('img-nine_presentation'),
        ];
    }
}
