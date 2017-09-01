// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require( 'gulp-sass' );
var concat = require( 'gulp-concat' );
var uglify = require( 'gulp-uglify' );
var rename = require( 'gulp-rename' );
var sourcemaps = require( 'gulp-sourcemaps' );

gulp.task(styles1);
gulp.task(styles2);
gulp.task(scripts1);
gulp.task(scripts2);

// Compile styles
function styles1() {
	return gulp.src('scss/**/*.scss')
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( sass.sync({ outputStyle : 'compressed' }).on('error', sass.logError) )
		.pipe( rename('global.min.css') )
		.pipe( sourcemaps.write( '../css' ) )
		.pipe(gulp.dest('css'));
}

function styles2() {
	return gulp.src('scss/**/*.scss')
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( sass.sync({ outputStyle : 'expanded' }).on('error', sass.logError) )
		.pipe( rename('global.css') )
		.pipe( sourcemaps.write( '../css' ) )
		.pipe(gulp.dest('css'));
}

// Concatenate & Minify JS
function scripts1() {
	return gulp.src( ['js/lib/*.js', 'js/vendor/*.js' ])
		.pipe( concat('global.js') )
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( rename('global.min.js') )
		.pipe( uglify() )
		.pipe( sourcemaps.write( '../js' ) )
		.pipe( gulp.dest('js') );
}
function scripts2() {
	return gulp.src( ['js/lib/*.js', 'js/vendor/*.js' ])
		.pipe( concat('global.js') )
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( sourcemaps.write( '../js' ) )
		.pipe( gulp.dest('js') );
}

gulp.task( 'watch:scripts', function() {
	gulp.watch( 'js/vendor/**/*.js', scripts1 );
	gulp.watch( 'js/vendor/**/*.js', scripts2 );
});

gulp.task( 'watch:sass', function() {
	gulp.watch( ['scss/**/*.scss'], styles1 );
	gulp.watch( ['scss/**/*.scss'], styles2 );
});

gulp.task( 'watch', gulp.parallel( 'watch:scripts', 'watch:sass' ));

// Default Task
gulp.task( 'default', gulp.series( 'styles1', 'styles2', 'scripts1', 'scripts2', 'watch' ));