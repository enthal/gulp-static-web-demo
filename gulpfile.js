const gulp = require('gulp') // assumes gulp3
const sequence = require('gulp-sequence').use(gulp)

require('gulp-static-web')(gulp, {
  postcss: [
    require('postcss-import'),
    require('precss'),
    require('autoprefixer'),
    require('lost'),
    require('postcss-nested-vars'),
    require('postcss-color-function'),
  ],
  postcssParser: require('postcss-comment'),
})

gulp.task('default', sequence('static', ['browserify', 'postcss']))
