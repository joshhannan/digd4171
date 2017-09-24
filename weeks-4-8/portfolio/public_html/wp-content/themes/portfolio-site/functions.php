<?php
/* ===========================================================
	DEFAULT CONFIG SETTINGS
=========================================================== */

	/*add_filter('show_admin_bar', '__return_false');*/
	add_editor_style('editor-style.css');

	update_option('image_default_link_type', 'none');
	remove_action('wp_head', 'wp_generator');

	add_theme_support('automatic-feed-links');
	add_theme_support('menus');
	add_theme_support('post-thumbnails');
	add_theme_support('widgets');

/* ===========================================================
	ENQUEUE SCRIPTS
=========================================================== */

	wp_enqueue_script(
		'p-theme',
		get_template_directory_uri() . '/js/theme.js',
		array('jquery'),
		null,
		true
	);

	wp_enqueue_style(
		'font-awesome',
		'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
		false,
		null
	);
	
	wp_enqueue_style( 'google-fonts', 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900,900i', false, null );
	
	/*wp_enqueue_style('p-style', get_template_directory_uri() . '/css/global.css', false, null);*/


	function get_stuff() {
		echo '';
	}