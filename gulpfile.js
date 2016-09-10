var Builder = require("systemjs-builder"),
	concat = require("gulp-concat"),
	del = require("del"),
	flatten = require("gulp-flatten"),
	gulp = require("gulp"),
	gulpif = require("gulp-if"),
	inject = require("gulp-inject"),
	minifyCss = require("gulp-minify-css"),
	path = require("path"),
	rename = require("gulp-rename"),
	replace = require("gulp-replace"),
	runSequence = require("run-sequence"),
	sass = require("gulp-sass"),
	sourcemaps = require("gulp-sourcemaps"),
	template = require("gulp-template"),
	usemin = require("gulp-usemin"),
	yargs = require("yargs").argv,
	zip = require("gulp-zip");

var env = yargs.env || "prod";

var root = ".";

var timestamp = new Date().toISOString().slice(0,19).replace(/-/g, "").replace(/T/g, "").replace(/:/g, "");

var resolveToApp = function( glob ) {
	return path.join( root, "app", glob || "" );
};

var resolveToComponents = function( glob ) {
	return path.join( root, "app/components", glob || "" );
};

var cap = function( val ) {
	return val.charAt(0).toUpperCase() + val.slice(1);
};

var paths = {
	js: resolveToComponents("**/*.js"),
	scss: resolveToApp("scss/cgn.scss"),
	css: path.join( root, "/css" ),
	vendorCss: [
		path.join( root, "jspm_packages/github/twbs/bootstrap@3.3.4/css/bootstrap.css" ),
		path.join( root, "jspm_packages/github/tameraydin/ngToast@1.5.4/dist/ngToast.css")
	],
	fonts: path.join( root, "jspm_packages/**/*.{eot,svg,ttf,woff,woff2}" ),
	img: path.join( root, "img/**/*.*" ),
	html: [
		resolveToApp("**/*.html"),
		path.join( root, "index.html" )
	],
	output: root,
	blankTemplates: {
		component: path.join( __dirname, "generator", "component/**/*.**" ),
		service:  path.join( __dirname, "generator", "service/**/*.**" )
	},
	config: {
		systemjs: path.join( root, "config.js" ),
		angular: path.join( root, "constants.json" )
	},
	src: path.join( root, "/app" ),
	dist: path.join( root, "/dist" )
};

gulp.task("dist", function( done ) {
	runSequence( "build", "zip", done );
});

gulp.task("zip", function() {
	var zipName = "dist-" + env + "_" + timestamp + ".zip";
	return gulp.src(path.join( paths.dist, "**/*"))
				.pipe(zip(zipName))
				.pipe(gulp.dest("."));
});

gulp.task("build", function( done ) {
	runSequence(
		"clean",
		[ "css", "fonts", "img", "compile:js" ],
		[ "html", "htaccess" ],
		done
	);
});

gulp.task("clean", function( done ) {
	del( paths.dist, done );
});

gulp.task("html", function() {
	var config = require("./constants.json")[env];

	return gulp.src(["./index.html", "maintenance.html"])
		.pipe(replace(/window\.apiUrl = .+;/, 'window.apiUrl = "' + config.apiUrl + '";'))
		.pipe( inject( gulp.src( path.join( paths.dist, "/app.min.js" ), { read: false } ), {
			starttag: "<!-- inject:build:js -->",
			ignorePath: [paths.dist],
			relative: true
		}))
		.pipe( inject( gulp.src( path.join( paths.dist, "css/*.css" ), { read: false } ), {
			starttag: "<!-- inject:build:css -->",
			ignorePath: [paths.dist],
			relative: true
		}))
		.pipe( usemin() )
		.pipe(replace(/css\/cgn\.min\.css/, "css/cgn.min.css?_v=_" + timestamp))
		.pipe(replace(/app\.min\.js/, "app.min.js?_v=_" + timestamp))
		.pipe( gulp.dest( paths.dist ) );
});

gulp.task("htaccess", function() {
	gulp.src("./.htaccess").pipe( gulp.dest( paths.dist ) );
});

gulp.task("css", ["sass"], function() {
	return gulp.src( paths.vendorCss.concat( paths.css + "/*.css" ) )
		.pipe(gulpif(env !== "prod", sourcemaps.init()))
		.pipe(minifyCss())
		.pipe(concat("cgn.min.css"))
		.pipe(gulpif(env !== "prod", sourcemaps.write()))
		.pipe( gulp.dest( path.join( paths.dist, "css" ) ) );
});

gulp.task("fonts", function() {
	return gulp.src( paths.fonts )
		.pipe( flatten() )
		.pipe( gulp.dest( path.join( paths.dist, "fonts" ) ) );
});

gulp.task("img", function() {
	return gulp.src( paths.img )
		.pipe( gulp.dest( path.join( paths.dist, "img" ) ) );
});

gulp.task("compile:js", function( done ) {
	var builder = new Builder();

	builder.reset();

	builder.loadConfig( paths.config.systemjs ).then(function() {  

		builder.config({
			transpiler: "babel",
			baseURL: "."
		});

		builder.buildSFX( "./app/bootstrap", path.join( paths.dist, "/app.min.js"), {
			minify: true,
			mangle: false,
			sourceMaps: true
		}).then(function() {
			done();
		}).catch(function(ex) {
			done(new Error(ex));
		});

	});
});

gulp.task("sass", function() {
	return gulp.src( paths.scss )
			.pipe(sass().on("error", sass.logError))
			.pipe(gulp.dest( paths.css ));
});

gulp.task("watch", function() {
	gulp.watch( paths.src.scss, ["sass"] );
});

gulp.task("component", function() {
	var name = yargs.name,
		parentPath = yargs.parent || "",
		ctrlAs = yargs.as || "",
		destPath = path.join( resolveToComponents(), parentPath, name );

	return gulp.src( paths.blankTemplates.component )
				.pipe(template({
					name: name,
					upCaseName: cap( name ),
					ctrlAs: ctrlAs
				}))
				.pipe(rename(function( path ) {
					path.basename = path.basename.replace("temp", name);
				}))
				.pipe( gulp.dest( destPath ) );
});

gulp.task("service", function() {
	var name = yargs.name,
		destPath = path.join( resolveToApp(), "common/service" );

	return gulp.src( paths.blankTemplates.service )
				.pipe(template({
					name: name,
					upCaseName: cap( name )
				}))
				.pipe(rename(function( path ) {
					path.basename = path.basename.replace("temp", name);
				}))
				.pipe( gulp.dest( destPath ) );
});