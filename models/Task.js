const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "must provide name"],
    maxlength: [20, "name cant ba of more than 20 words"],
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
