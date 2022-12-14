const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("hlo guys vivek is gr8");
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    console.log(error)
    res.status(500).send("invalid name")
  }
};
const deleteTask = (req, res) => {
  // console.log(req.body)
  res.send("Deletedask");
};
const updateTask = (req, res) => {
  res.send("update the task");
};
const getTask = (req, res) => {
  res.send("getTask");
};
module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
