<?php
/* 
Plugin Name: Live WP Fix It Support
Version: 1.6
Description: WP Support just got easier and faster. Plugin for WP Fix It Live Support.  This plugin will add a live chat widget for site admins to see and ask support questiosn to the agents at WP Fix It.  You can even share your screen to explain the problem you need fixed in detail.
Author: wpfixit, bahia0019
Author URI: https://wpfixit.com
License: GPLv2 or later
*/


function wpfixit_admin_footer_function() {

    if ( current_user_can( 'manage_options' ) ) {

        wp_enqueue_style( 'wpls_style', plugin_dir_url(  __FILE__  ) . 'wpls.css' );
        wp_enqueue_script( 'wpls_script', plugin_dir_url(  __FILE__  ) . 'wpls.js' );
 
    }

}

add_action('admin_footer', 'wpfixit_admin_footer_function');




/**
 * Loads the WP Fix It chat window onto the front end, for logged in users.
*/

function wpfixit_wpas() {

    if ( current_user_can( 'manage_options' ) ) {

        wp_enqueue_style( 'wpls_style', plugin_dir_url(  __FILE__  ) . 'wpls.css' );
        wp_enqueue_script( 'wpls_script_front', plugin_dir_url(  __FILE__  ) . 'wpls.js' );
 
    }

}

add_action('wp_footer', 'wpfixit_wpas');
