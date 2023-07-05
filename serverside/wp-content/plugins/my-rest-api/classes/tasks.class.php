<?php
/*
Plugin Name: My REST API
*/

if (!defined('ABSPATH')) {
    exit;
}

class Tasks
{
    public function __construct()
    {
        $this->Task_rest_api_init();
    }

    protected function Task_rest_api_init()
    {
        register_rest_route('task-api/v1', '/task/', array(
            'methods' => 'GET',
            'callback' => array($this, 'Task_api_callback'),
        ));

        //for updating
        register_rest_route('task-api/v1', '/task/update/', array(
            'methods' => 'GET',
            'callback' => array($this, 'Task_api_callback_update'),
        ));

        //for soft deletion :
        register_rest_route('task-api/v1', '/task/delete/', array(
            'methods' => 'GET',
            'callback' => array($this, 'Task_api_callback_delete'),
        ));


        register_rest_route('task-api/v1', '/task/add/', array(
            'methods' => 'GET',
            'callback' => array($this, 'Task_api_callback_add'),
        ));
    }

    protected function GetTheID()
    {
        if ((isset($_REQUEST['id'])) && (trim($_REQUEST['id']) != '')) {
            return $_REQUEST['id'];
        }
    }

    protected function GetPostDetails($id)
    {
        //getting DATA from ACF Plugin
        $task_title = get_field('field_64a43204928b8', $id);
        $task_status = get_field('field_64a42ea6928b7', $id);
        $task_date = get_field('field_64a43234928ba', $id);
        $task_description = get_field('field_64a43217928b9', $id);
        $deleted_task = get_field('field_64a522b78065f', $id);

        if (!$deleted_task) {
            $ARRrtn = array(
                'task_title' => $task_title,
                'task_status' => $task_status,
                'task_date' => $task_date,
                'task_description' => $task_description,

            );
            return $ARRrtn;
        }
    }



    protected function Get_Tasks_by($id)
    {
        $rtn = array();
        if (!isset($id)) {
            $args = array(
                'post_type' => 'task-api',
                'posts_per_page' => -1,



            );
            $res = get_posts($args);
            foreach ($res as $resa) {
                if ($this->GetPostDetails($resa->ID)) {
                    $rtn[]  = $this->GetPostDetails($resa->ID);
                }
            }
            wp_reset_postdata();
            return $rtn;
        }

        if (isset($id)) {
            //getting query selector 
            global $wpdb;
            $table_name = $wpdb->prefix . 'posts';
            $post_type = 'task-api';

            $query = $wpdb->prepare(
                "SELECT ID, post_title FROM $table_name WHERE post_type = %s and ID = %s",
                $post_type,
                $id
            );

            $results = $wpdb->get_results($query);

            if ($results) {
                foreach ($results as $resa) {
                    $rtn[]  = $this->GetPostDetails($resa->ID);
                }
                return $rtn;
            } else {
                return array('error' => 'Sorry No Luck!');
            }
        }
    }




    // Task REST API callback function
    public function Task_api_callback()
    {
        $response = array(
            'task' => $this->Get_Tasks_by($this->GetTheID()),

        );
        $headers = array(
            'Content-Type' => 'application/json; charset=utf-8',

        );

        return new WP_REST_Response($response, 200, $headers);
    }



    protected function UpdateTask($id)
    {
        return $id;
    }




    public function Task_api_callback_update()
    {
        $response = array(
            'task' => $this->UpdateTask($this->GetTheID()),

        );
        $headers = array(
            'Content-Type' => 'application/json; charset=utf-8',

        );

        return new WP_REST_Response($response, 200, $headers);
    }


    protected function addTask($title, $date, $description)
    {

                 //adding regular post : 
                $post_data = array(
                    'post_title'   => $title,
                    'post_status'  => 'publish',
                    'post_type'    => 'task-api',
                );


                $post_id = wp_insert_post($post_data);

                if (!is_wp_error($post_id)) {

                    update_field('field_64a43204928b8', $title, $post_id); //updating title
                    update_field('field_64a42ea6928b7', 'Uncomplete', $post_id);//updating status
                    update_field('field_64a43234928ba', $date, $post_id);//updating date
                    update_field('field_64a43217928b9', $description, $post_id);//updating description

                    return $this->Get_Tasks_by($post_id);
                } 
                else {

                    return $error_message = $post_id->get_error_message();
                }
    }



    public function Task_api_callback_add()
    {

        $title  = $_REQUEST['title'];
        $date   = $_REQUEST['date'];
        $desc   = $_REQUEST['desc'];
        if(!$title || $title==""){
            $rtn = "Title Is Needed!";

        }
        else{
            $rtn = $this->addTask($title, $date,  $desc );
        }
        $response = array(
            'task' => $rtn,

        );
        $headers = array(
            'Content-Type' => 'application/json; charset=utf-8',

        );

        return new WP_REST_Response($response, 200, $headers);
    }
}
