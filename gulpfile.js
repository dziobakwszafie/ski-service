var gulp = require("gulp");
var git = require("gulp-git");
var runSequence = require("run-sequence");

gulp.task("add", function () {
  return gulp.src("./git-test/*").pipe(git.add({ args: "." }));
});

gulp.task("commit", function () {
  // just source anything here - we just wan't to call the prompt for now
  gulp.src("package.json").pipe(
    prompt.prompt(
      {
        type: "input",
        name: "commit",
        message: "Please enter commit message...",
      },
      function (res) {
        // now add all files that should be committed
        // but make sure to exclude the .gitignored ones, since gulp-git tries to commit them, too
        return gulp
          .src(["!node_modules/", "./*"], { buffer: false })
          .pipe(git.commit(res.commit));
      }
    )
  );
});

gulp.task("push", function () {
  git.push("origin", function (err) {
    if (err) throw err;
  });
});

// var gulp = require("gulp");
// var argv = require("yargs").argv;
// var git = require("gulp-git");
// var runSequence = require("run-sequence");

// gulp.task("add", function () {
//   console.log("adding...");
//   return gulp.src(".").pipe(git.add());
// });

// gulp.task("commit", function () {
//   console.log("commiting");
//   if (argv.m) {
//     return gulp.src(".").pipe(git.commit(argv.m));
//   }
// });

// gulp.task("push", function () {
//   console.log("pushing...");
//   git.push("origin", "master", function (err) {
//     if (err) throw err;
//   });
// });

// gulp.task("gitrun", function () {
//   runSequence("add", "commit", "push");
// });
