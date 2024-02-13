<?php

//if(preg_match("/{$_SERVER["REMOTE_ADDR"]}/", url()) || preg_match("/localhost/", url())) {
//if(preg_match("/{$_SERVER["REMOTE_ADDR"]}/", url())) {
    /** css */
    $minCSS = new MatthiasMullie\Minify\CSS();

     /** theme */
      $themes = "/../../themes/";
      $cssDir = scandir(__DIR__ . $themes . CONF_VIEW_THEME . "/assets/css");
      foreach($cssDir as $css) {
          $cssFiles = __DIR__ . $themes . CONF_VIEW_THEME . "/assets/css/{$css}";
          if(is_file($cssFiles) && pathinfo($cssFiles)["extension"] === "css") {
              $minCSS->add($cssFiles);
          }
      }

    $minCSS->add(__DIR__ . "/../../shared/styles/style-certificate.css");
    $minCSS->add(__DIR__ . "/../../shared/styles/style-moviment.css");
    $minCSS->add(__DIR__ . "/../../shared/styles/style-membership.css");
    $minCSS->add(__DIR__ . "/../../shared/styles/style-register.css");
    $minCSS->add(__DIR__ . "/../../shared/styles/style-wallet.css");
    $minCSS->add(__DIR__ . "/../../shared/styles/style-occupation.css");
    $minCSS->add(__DIR__ . "/../../shared/styles/style-documentation.css");
    $minCSS->add(__DIR__ . "/../../shared/styles/style-nomembers.css");
    $minCSS->add(__DIR__ . "/../../shared/styles/style-proof.css");

    /** MinifyCss */
    $minCSS->minify(__DIR__ . $themes . CONF_VIEW_THEME . "/assets/style.css");

    /** js */
    $minJS = new MatthiasMullie\Minify\JS();

    /** theme */
    $jsDir = scandir(__DIR__ . $themes . CONF_VIEW_THEME . "/assets/js");
    foreach($jsDir as $js) {
        $jsFiles = __DIR__ . $themes . CONF_VIEW_THEME . "/assets/js/{$js}";
        if(is_file($jsFiles) && pathinfo($jsFiles)["extension"] === "js") {
            $minJS->add($jsFiles);
        }
    }

    $minJS->add(__DIR__ . "/../../shared/scripts/functions.js");
    $minJS->add(__DIR__ . "/../../shared/scripts/script-config.js");
    $minJS->add(__DIR__ . "/../../shared/scripts/script-security.js");
    $minJS->add(__DIR__ . "/../../shared/scripts/script-user.js");
    // $minJS->add(__DIR__ . "/../../shared/scripts/script-moviment.js");

    /** MinifyCss */
    $minJS->minify(__DIR__ . $themes . CONF_VIEW_THEME . "/assets/scripts.js");
//}
