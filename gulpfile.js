"use strict";

const gulp = require("gulp");
const bs = require("browser-sync").create();
var reload = bs.reload;

var path = {
  build: {
    dir: "theme/",
  },
};

// Dev Task
gulp.task("default", function () {
  bs.init({
    server: {
      baseDir: path.build.dir,
    },
  });
  gulp.watch(path.build.dir).on("change", reload);
});
