<?php
	get_header();
?>
<?php
	if ( have_posts() ) :
		while ( have_posts() ) : the_post();
?>
		<div id="post-<?php echo $post->ID; ?>" class="post">
			<h1><?php the_title(); ?></h1>
			<h1><?php the_title(); ?></h1>
			<h1><?php the_title(); ?></h1>
			<h1><?php the_title(); ?></h1>
			<?php get_stuff(); ?>
		</div>
<?php
		endwhile;
	endif;
	get_sidebar();
?>
<?php
	get_footer();
?>