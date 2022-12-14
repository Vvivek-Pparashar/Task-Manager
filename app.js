const express = require("express");
const tasks = require("./routes/tours");
const path = require("path");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
require('dotenv').config();

const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//Routes

// app.get("/", (req, res) => {
//   res.sendFile('index.html');
// });

app.use("/api/v1/tasks", jsonParser, tasks);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, "127.0.0.1", console.log("Vivek is Gr8"));
  } catch (error) {
    console.log(error);
  }
};

start();
