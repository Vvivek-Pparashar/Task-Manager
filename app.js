const express = require("express");
const tasks = require("./routes/tours");
const path = require("path");
const connectDB = require("./db/connect");
require('dotenv').config();

const app = express();


app.use(express.static('./public'))
app.use(express.json());


//Routes
app.use("/api/v1/tasks", tasks);

// app.get("/", (req, res) => {
//   res.sendFile('index.html');
// });



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
