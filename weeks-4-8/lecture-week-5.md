ASSIGNMENT DUE 10/12!

Building a Wordpress Portfolio Site

You are going to build yourself a portfolio site utilizing WordPress.  It will need to accomplish these things:
	1.  Display Portfolio pieces with links to actual sites (links if applicable).
		- need 10 example portfolio pieces ( if you don't have them, make them up ).
		- Portfolio List Page
		- Portfolio Detail Page
		- build case study page for each portfolio entry.
		- Ability to filter through portfolio categories.
		- create a portfolio custom post type and utilize custom fields to add information.
	2.  Display a blog in your site.  Also need to be able to filter by categories.
	3.  Have a contact page with a form for people to contact you.
	4.  About page
		- who are you
		- what do you do
		- why should someone hire you
	5.  Your theme needs to be 100% RESPONSIVE!  Utilizing what you learned through weeks 1-4.
	6.  ENTIRE SITE should be editable in wordpress - NOTHING HARD CODED!
	7.  Add your social media information so clients can find you.

I'm not so much worried about the design of your site as much as I am going to be looking at your UI choices.  Utilize what you learned in weeks 1-4 with HTML blocking, naming conventions, keeping HTML / CSS / Javascript organized, and responsive tricks.  Any questions / advice you need concerning this, just ask!


Week 5 - Getting started with WordPress

Theme basics
	Beginning your theme
		the very least a theme needs to have are a style.css & index.php.
		Understanding how to structure your PHP
		Adding screenshot.png to display theme picture in Appearance -> Themes
		Template Hierarchy
			- https://developer.wordpress.org/themes/basics/template-hierarchy/
		Basic theme functions
			get_header()
			get_sidebar()
			get_footer()
			wp_head()
			wp_footer()
			body_class()
			bloginfo(), get_bloginfo()
		Getting started with loading scripts and styles
			functions.php
				wp_enqueue_style()
				wp_enqueue_script()
				https://developer.wordpress.org/reference/functions/add_theme_support/
				add_theme_support()
					add_theme_support('menus'), add_theme_support('post-thumbnails'), add_theme_support('widgets')
		Templating in WordPress Themes
			index.php
				- how queries work on a basic level
			tpl-custom-template.php
				- include Template Name: Custom Template in commented out php
			archive.php, archive-post-type.php
			page.php
			single.php, single-post-type.php
		Basic Header Functionality
			https://developer.wordpress.org/reference/functions/wp_nav_menu/
			wp_nav_menu( $args );
			Theme Locations
				register_nav_menu()
		The Post
			How Posts Work
				- The Loop
				- $args for queries
				- get_posts(), query_posts(), new WP_Query()
			Custom Post Types
			Taxonomies
				https://codex.wordpress.org/Taxonomies
		Linking to WordPress items
			get_permalink()