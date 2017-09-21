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
?>