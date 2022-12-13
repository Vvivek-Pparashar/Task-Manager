const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://vivek_parashar:vivek_parashar@cluster0.cgpw2.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
