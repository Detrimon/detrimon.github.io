import gulp from "gulp";
const { src, dest } = gulp;

import imagemin, { gifsicle, mozjpeg, optipng, svgo } from "gulp-imagemin";

import browsersync from "browser-sync";
import fileinclude from "gulp-file-include";

import del from "del";

import dartSass from "sass";
import gulpSass from "gulp-sass";
const scss = gulpSass(dartSass);

import autoprefixer from "gulp-autoprefixer";
import group_media from "gulp-group-css-media-queries";
import clean_css from "gulp-clean-css";
import rename from "gulp-rename";
import webphtml from "gulp-webp-html";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";
import fonter from "gulp-fonter";
import webpackStream from "webpack-stream";
import fs from "fs";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const uglify = require("gulp-uglify-es").default;
const webp = require("gulp-webp");
const webpcss = require("gulp-webp-css-fixed");
const svgSprite = require("gulp-svg-sprite");

const project_folder = "build";
const source_folder = "src";

const path = {
  build: {
    html: `${project_folder}/`,
    favicon: `${project_folder}/`,
    css: `${project_folder}/css/`,
    js: `${project_folder}/js/`,
    img: `${project_folder}/img/`,
    fonts: `${project_folder}/fonts/`,
  },
  src: {
    html: [`${source_folder}/*.html`, `!${source_folder}/_*.html`],
    favicon: `${source_folder}/favicon.ico`,
    css: `${source_folder}/scss/styles.scss`,
    js: `${source_folder}/js/app.js`,
    img: `${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
    fonts: `${source_folder}/fonts/*.{ttf,woff2}`,
  },
  watch: {
    html: `${source_folder}/**/*.html`,
    css: `${source_folder}/scss/**/*.scss`,
    js: `${source_folder}/js/**/*.js`,
    img: `${source_folder}/img/**/*.{jpg,png,svg,gif,ico,webp}`,
  },
  clean: `./${project_folder}/`,
};

function browserSync(params) {
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/",
    },
    port: 3005,
    notify: true,
  });
}

function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(webphtml())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function clean(params) {
  return del(path.clean);
}

function css() {
  return src(path.src.css)
    .pipe(
      scss({
        outputStyle: "expanded",
      })
    )
    .pipe(group_media())
    .pipe(
      autoprefixer({
        cascade: true,
      })
    )
    .pipe(webpcss())
    .pipe(dest(path.build.css))
    .pipe(clean_css())
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js)
    .pipe(fileinclude())
    .pipe(
      webpackStream({
        mode: "production",
        output: {
          filename: "app.js",
        },
        module: {
          rules: [
            {
              test: /\.(js)$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          ],
        },
      })
    )
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function favicon() {
  return src(path.src.favicon).pipe(dest(path.build.favicon));
}

function images() {
  return src(path.src.img)
    .pipe(
      webp({
        quality: 70,
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin(
        [
          gifsicle({ interlaced: true }),
          mozjpeg({ quality: 70, progressive: true }),
          optipng({ optimizationLevel: 5 }),
          svgo({
            plugins: [
              { name: "removeViewBox", active: true },
              { name: "cleanupIDs", active: false },
            ],
          }),
        ],
        {
          verbose: true,
        }
      )
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream());
}

function fonts() {
  src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
  return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
}

gulp.task("svgSprite", function () {
  return gulp
    .src([source_folder + "/iconsprite/*.svg"])
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../icons/icons.svg",
            example: true,
          },
        },
      })
    )
    .pipe(dest(path.build.img));
});

gulp.task("otf2ttf", function () {
  return gulp
    .src([source_folder + "/fonts/*.otf"])
    .pipe(
      fonter({
        formats: ["ttf"],
      })
    )
    .pipe(dest(source_folder + "/fonts/"));
});

function fontsStyle(params) {
  let file_content = fs.readFileSync(source_folder + "/scss/fonts.scss");
  if (file_content === "") {
    fs.writeFile(source_folder + "/scss/fonts.scss", "", cb);
    return fs.readdir(path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split(".");
          fontname = fontname[0];
          if (c_fontname !== fontname) {
            fs.appendFile(
              source_folder + "/scss/fonts.scss",
              '@include font("' +
                fontname +
                '", "' +
                fontname +
                '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

// function cb() {}

function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
}

const build = gulp.series(
  clean,
  gulp.parallel(js, css, html, favicon, images, fonts)
);
const watch = gulp.parallel(build, watchFiles, browserSync);

export { build, watch, fontsStyle, fonts, images, js, css, html, favicon };
export default watch;
