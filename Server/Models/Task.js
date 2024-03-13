const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  action: String,
  done: Boolean,
});

const TaskModel = mongoose.model("item", TaskSchema);

module.exports = TaskModel;