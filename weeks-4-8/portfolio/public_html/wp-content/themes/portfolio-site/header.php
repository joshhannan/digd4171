<html>
	<head>
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<header>
<?php
	$args = array(
		'container' => 'nav',
		'menu' => '',
		'menu_class' => '',
		'container_class' => 'header-nav'
	);
	wp_nav_menu( $args );
?>
		</header>