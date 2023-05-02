<?php

namespace App\View\Composers\Partials\home;

use Roots\Acorn\View\Composer;

class HomeCover extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.home.home-cover',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'titleOneOne' => get_field('title-one-one'),
            'titleOneTwo' => get_field('title-one-two'),
            'titleTwo' => get_field('title-two'),
            'titleThree' => get_field('title-three'),
            'textOne' => get_field('text-one'),
            'textTwo' => get_field('text-two'),
            'textThree' => get_field('text-three'),
        ];
    }
}
