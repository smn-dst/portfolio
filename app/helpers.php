<?php

namespace App;

/**
 * Build assets hmr uri
 *
 * @param string $asset
 * @return string
 */
function hmr_assets(string $asset): string
{
    return "http://127.0.0.1:3000/{$asset}";
}
