<!doctype html>
<html <?php language_attributes(); ?>>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <title>PORTFOLIO SIMON DOUSSET</title>
    <meta name="description" content="Portfolio de Simon Dousset : Créative Développeur Front-End">
    <meta name=" robots" content=" index, follow">
    <meta property= "og:description" content= "SIMON DOUSSET, créative développeur front-end, projets de simon dousset" / >
    <meta name=" author" content="Dousset Simon"/>
    <meta name=" copyright" content=" Titulaire des droits"/>
    </head>

  <body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <?php do_action('get_header'); ?>

    <div id="app">
      <?php echo view(app('sage.view'), app('sage.data'))->render(); ?>
    </div>
  </body>
    <?php do_action('get_footer'); ?>
    <?php wp_footer(); ?>
</html>
