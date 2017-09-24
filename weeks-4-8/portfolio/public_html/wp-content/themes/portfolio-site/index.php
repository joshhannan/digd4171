<?php
	get_header();


	$post = get_post(11);
	var_dump( $post );
	echo '<h1>' . $post->post_title . '</h1>';


?>
<?php
	if ( have_posts() ) :
		while ( have_posts() ) : the_post();
?>
		<div id="post-<?php echo $post->ID; ?>" class="post">
			<h1><?php the_title(); ?></h1>
			<div class="content">
			<?php the_content(); ?>
			</div>
		</div>
<?php
		endwhile;
	endif;
	get_sidebar();
?>
<?php
	get_footer();
?>