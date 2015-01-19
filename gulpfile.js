var gulp = require("gulp");
var app = require("./lib/server");

// start-server：サーバの起動タスク
gulp.task("start-server", function() {
  console.log(process.cwd() + "/app");
  console.log(app);
  var server = app.create({
    port:8080,
    documentRoot: "./app"
  });
  server.start();
});

// デフォルトのタスクを指定
gulp.task("default", ["start-server"]);
