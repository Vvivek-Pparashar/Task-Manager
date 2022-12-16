const Task = require("../models/Task");
const asyncWraper = require("../middlewares/asyncWraper");

// =====================   GET ALL THE TASKS   ================================

const getAllTasks = asyncWraper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({ tasks: task });
});

// =====================   GET THE TASK   ================================
const getTask = asyncWraper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: "No task for this id" });
  }
  res.status(200).json({ task });
});

// =====================   CREATE A NEW TASK  ================================

const createTask = asyncWraper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

// =====================   DELETE THE TASK   ================================

const deleteTask = asyncWraper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return res.status(404).json({ msg: "No task for this id" });
  }
  res.status(200).json({ task });
});

// =====================   UPDATE ALL THE TASK   ================================

const updateTask = asyncWraper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: "No task for this id" });
  }

  res.status(200).send({ task });
});

// =====================   EXPORTS EVERYTHING   ================================

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
