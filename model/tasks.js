var con = require("./mysql.js");

//Task object constructor
var Task = function(task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};

Task.createTask = function createUser(newTask, result) {
  con.query("INSERT INTO tasks set ?", newTask, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Task.getTaskById = function createUser(taskId, result) {
  con.query("Select task from tasks where id = ? ", taskId, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Task.getAllTask = function getAllTask(result) {
  con.query("Select * from tasks", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("tasks : ", res);

      result(null, res);
    }
  });
};

Task.updateById = function(id, task, result) {
  con.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Task.remove = function(id, result) {
  con.query("DELETE FROM tasks WHERE id = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Task;
