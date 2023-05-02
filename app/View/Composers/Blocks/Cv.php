<?php

namespace App\View\Composers\Blocks;

use Roots\Acorn\View\Composer;

class Cv extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'blocks.cv',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            'cv' => get_field('cv'),
        ];
    }
}
