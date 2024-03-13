const TaskModel = require("../Models/Task");

async function getTasks (req, res) {
  try {
    const tasks = await TaskModel.find();
    res.json(tasks);
  } catch (err) {
    res.json({ message: err });
  }
}

async function addTask(req,res){
    const task = new TaskModel({
        action: req.body.action,
        done: false
    });
    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        res.json({ message: err });
    }
}

async function updateTask(req,res){
    const id = req.params.id;
    try {
        const updatedTask = await TaskModel.findByIdAndUpdate(id,{done:true});
        res.json(updatedTask);
    }
    catch (err) {
        res.json({ message: err });
    }
}

async function deleteTask(req,res){
    const id = req.params.id;
    try {
        const removedTask = await TaskModel.findByIdAndDelete(id);
        res.json(removedTask);
    }
    catch (err) {
        res.json({ message: err });
    }
}

module.exports = { getTasks, addTask, updateTask, deleteTask };