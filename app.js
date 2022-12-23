const express = require("express");
const tasks = require("./routes/tours");
const path = require("path");
const connectDB = require("./db/connect");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/error-handler");
require("dotenv").config();

const app = express();

// =====================   MiddleWares   ================================

app.use(express.static("./public"));
app.use(express.json());

// =====================   Routes   ================================

// app.use("/vi", (req, res)=>res.send("vivek is gr8"))
app.get("/", (req, res)=>res.sendFile(path.join(__dirname, '/index.html')));
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandler);

// =====================   Listening to port   ================================

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, "127.0.0.1", console.log("Vivek is Gr8"));
  } catch (error) {
    console.log(error);
  }
};

start();
