module.exports = function(app) {
  var usersRouter = require("./users");
  app.use("/users", usersRouter);

  var tasksRouter = require("./tasks");
  tasksRouter(app); //register the route
};
