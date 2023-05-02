<?php

namespace App\View\Composers\Blocks;

use Roots\Acorn\View\Composer;

class Contact extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'blocks.contact',
    ];

    /**
     * Data to be passed to view before rendering, but after merging.
     *
     * @return array
     */
    public function with()
    {
        return [
            'titleMail' => get_field('title-mail'),
            'mail' => get_field('mail'),
            'urlLinkedin' => get_field('url_linkedin'),
            'urlGithub' => get_field('url_github'),
            'urlInstagram' => get_field('url_instagram'),
        ];
    }
}
