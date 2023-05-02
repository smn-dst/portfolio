<?php

namespace App\View\Composers\Partials\mobile;

use Roots\Acorn\View\Composer;

class MobileCover extends Composer
{
    /**
     * List of views served by this composer.
     *
     * @var array
     */
    protected static $views = [
        'partials.mobile.mobile-cover',
    ];

    /**
     * Data to be passed to view before rendering.
     *
     * @return array
     */
    public function with()
    {
        return [
            'titleFirst' => get_field('title-firstname'),
            'titleLast' => get_field('title-lastname'),
            'titleSecondary' => get_field('title_secondary'),
            'job' => get_field('job'),
            'subText' => get_field('sub-text'),
            'description' => get_field('description'),
            'urlEmail' => get_field('url_email'),
            'urlLinkedin' => get_field('url_linkedin'),
            'urlGithub' => get_field('url_github'),
            'urlInstagram' => get_field('url_instagram'),
        ];
    }
}
