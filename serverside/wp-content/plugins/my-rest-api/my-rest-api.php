<?php
/*
Plugin Name: Task REST API
Description: Task REST API endpoint (This Plugin Using ACF Plugin Fields!).
Version: 1.0.0
Author: Wisam Shomar
*/


// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

require_once(__DIR__ . '/classes/tasks.class.php');

function my_rest_api_init()
{
    new Tasks();
}

add_action('rest_api_init', 'my_rest_api_init');
