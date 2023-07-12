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
            'artTitle' => get_field('art-title'),
            'fieldsoffateTitle' => get_field('fieldsoffate-title'),
            'veuveambalTitle' => get_field('veuveambal-title'),
            'torikarasanTitle' => get_field('torikarasan-title'),

            'solwareAreas' => get_field('solware-areas'),
            'controlAreas' => get_field('control-areas'),
            'patinoAreas' => get_field('patino-areas'),
            'optevenAreas' => get_field('opteven-areas'),
            'butcherAreas' => get_field('butcher-areas'),
            'iziAreas' => get_field('izi-areas'),
            'artAreas' => get_field('art-areas'),
            'fieldsoffateAreas' => get_field('fieldsoffate-areas'),
            'veuveambalAreas' => get_field('veuveambal-areas'),
            'torikarasanAreas' => get_field('torikarasan-areas'),

            'solwareImg' => get_field('solware-img'),
            'controlImg' => get_field('control-img'),
            'patinoImg' => get_field('patino-img'),
            'optevenImg' => get_field('opteven-img'),
            'butcherImg' => get_field('butcher-img'),
            'iziImg' => get_field('izi-img'),
            'artImg' => get_field('art-img'),
            'fieldsoffateImg' => get_field('fieldsoffate-img'),
            'veuveambalImg' => get_field('veuveambal-img'),
            'torikarasanImg' => get_field('torikarasan-img'),

            'solwareUrl' => get_field('solware-url'),
            'controlUrl' => get_field('control-url'),
            'patinoUrl' => get_field('patino-url'),
            'optevenUrl' => get_field('opteven-url'),
            'butcherUrl' => get_field('butcher-url'),
            'iziUrl' => get_field('izi-url'),
            'artUrl' => get_field('art-url'),
            'fieldsoffateUrl' => get_field('fieldsoffate-url'),
            'veuveambalUrl' => get_field('veuveambal-url'),
            'torikarasanUrl' => get_field('torikarasan-url'),
        ];
    }
}
