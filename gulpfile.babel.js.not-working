import gulp from 'gulp';
import handlebars from 'gulp-compile-handlebars';
import rename from 'gulp-rename';
import path from 'path';
import glob from 'glob';
import parsePath from 'parse-filepath';

const SRC_DIR = path.join(__dirname, 'src');
const TEMPLATE_DIR = path.join(SRC_DIR, 'templates');
const PARTIAL_DIR = path.join(TEMPLATE_DIR, 'partials');
const HELPER_DIR = path.join(TEMPLATE_DIR, 'helpers');
const DEST_DIR = path.join(__dirname, 'dev');
const LOG_LEVEL = handlebars.Handlebars.logger.DEBUG;

gulp.task('rootIndex', function () {
  const templateData = {
    firstName: 'Kaanon'
  },

  options = {
    ignorePartials: false,
    batch : [PARTIAL_DIR],
    // hack for batching helpers, see:
    // https://github.com/kaanon/gulp-compile-handlebars/pull/6
    helpers : (function() {
      let helpers = {};
      // Get a list of all the helpers in the folder
      const helperFiles = glob.sync(path.join(HELPER_DIR, '*.js'), {});
      helperFiles.forEach( function(filePath) {
        const pathParts = parsePath(filePath);
        try {
          helpers[pathParts.name] = require(filePath);
        } catch(e) {
          console.log('ERROR in options helper-hack');
        }
      });
      console.log(helpers);
      return helpers;
    })(),
      compile: {
      data: {
        level: LOG_LEVEL,
      }
    }
  };

  return (
    gulp.src(path.join(TEMPLATE_DIR, 'index.hbs'))
    .pipe(handlebars(templateData, options))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(DEST_DIR))
  );
});
