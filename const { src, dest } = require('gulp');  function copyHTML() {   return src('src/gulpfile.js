const { src, dest } = require('gulp');

function copyHTML() {
  return src('src/*.html').pipe(dest('dist'));
}

exports.default = copyHTML;
