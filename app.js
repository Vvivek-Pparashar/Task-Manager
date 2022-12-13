const express = require("express");
const tasks = require("./routes/tours");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");

const app = express();

const jsonParser = bodyParser.json();

//Routes

// app.get("/", (req, res) => {
//   res.sendFile('index.html');
// });

app.use("/api/v1/tasks", jsonParser, tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, "127.0.0.1", console.log("Vivek is Gr8"));
  } catch (error) {
    console.log(error);
  }
};

start();
