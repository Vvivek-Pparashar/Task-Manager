const getAllTasks = (req, res) => {
  res.send("hlo guys vivek is gr8");
};

const createTask = (req, res) => {
        // console.log(req.)
  console.log(req.body);
  res.json(req.body);
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
