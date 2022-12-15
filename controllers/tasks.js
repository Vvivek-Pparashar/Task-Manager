const Task = require("../models/Task");

// =====================   GET ALL THE TASKS   ================================

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ tasks: task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// =====================   GET THE TASK   ================================
const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: "No task for this id" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send("invalid name");
  }
};

// =====================   CREATE A NEW TASK  ================================

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error);
    res.status(500).send("invalid name");
  }
};

// =====================   DELETE THE TASK   ================================

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({ msg: "No task for this id" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send("invalid name");
  }
};

// =====================   UPDATE ALL THE TASK   ================================
const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: "No task for this id" });
    }

    res.status(200).send({ task });
  } catch (error) {
    res.status(500).send("invalid name");
  }
};

// =====================   EXPORTS EVERYTHING   ================================
module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
