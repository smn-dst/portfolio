<?php

namespace App\View\Composers\Partials\projects;

use Roots\Acorn\View\Composer;

class ProjectsCover extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.projects.projects-cover',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'titleOne' => get_field('title-one'),
            'titleTwo' => get_field('title-two'),
            'titleThree' => get_field('title-three'),
            'textOne' => get_field('text-one'),
            'textTwo' => get_field('text-two'),
            'subText' => get_field('sub-text'),
            'url' => get_field('url'),
        ];
    }
}
