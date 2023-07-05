<?php
// Add this code to your theme's functions.php file or in a custom plugin

function create_custom_post_type() {
    // Define labels for the post type
    $labels = array(
      'name'               => 'Tasks',
      'singular_name'      => 'Task',
      'add_new'            => 'Add New',
      'add_new_item'       => 'Add New Task',
      'edit_item'          => 'Edit Task',
      'new_item'           => 'New Task',
      'view_item'          => 'View Task',
      'search_items'       => 'Search Tasks',
      'not_found'          => 'No Tasks found',
      'not_found_in_trash' => 'No Tasks found in trash',
      'parent_item_colon'  => 'Parent Task:',
      'menu_name'          => 'Tasks'
    );
  
    // Define other parameters for the post type
    $args = array(
      'labels'              => $labels,
      'public'              => true,
      'has_archive'         => false,
      'publicly_queryable'  => false,
      'query_var'           => true,
      'rewrite'             => array( 'slug' => 'Tasks' ),
      'capability_type'     => 'page',
      'hierarchical'        => true,
      'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'author', 'comments' ),
      'menu_position'       => 1,
      'menu_icon'           => 'dashicons-table-col-after'
    );
  
    // Register the custom post type
    register_post_type( 'task-api', $args );
  }
  add_action( 'init', 'create_custom_post_type' );
  
?>