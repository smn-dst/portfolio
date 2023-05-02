<?php

namespace App\View\Composers\Blocks;

use Roots\Acorn\View\Composer;

class Projects extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'blocks.projects',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            'title' => get_field('title'),
            'solwareTitle' => get_field('solware-title'),
            'controlTitle' => get_field('control-title'),
            'patinoTitle' => get_field('patino-title'),
            'optevenTitle' => get_field('opteven-title'),
            'butcherTitle' => get_field('butcher-title'),
            'iziTitle' => get_field('izi-title'),
            'dronyTitle' => get_field('drony-title'),

            'solwareAreas' => get_field('solware-areas'),
            'controlAreas' => get_field('control-areas'),
            'patinoAreas' => get_field('patino-areas'),
            'optevenAreas' => get_field('opteven-areas'),
            'butcherAreas' => get_field('butcher-areas'),
            'iziAreas' => get_field('izi-areas'),
            'dronyAreas' => get_field('drony-areas'),

            'solwareImg' => get_field('solware-img'),
            'controlImg' => get_field('control-img'),
            'patinoImg' => get_field('patino-img'),
            'optevenImg' => get_field('opteven-img'),
            'butcherImg' => get_field('butcher-img'),
            'iziImg' => get_field('izi-img'),
            'dronyImg' => get_field('drony-img'),

            'solwareUrl' => get_field('solware-url'),
            'controlUrl' => get_field('control-url'),
            'patinoUrl' => get_field('patino-url'),
            'optevenUrl' => get_field('opteven-url'),
            'butcherUrl' => get_field('butcher-url'),
            'iziUrl' => get_field('izi-url'),
            'dronyUrl' => get_field('drony-url'),
        ];
    }
}
