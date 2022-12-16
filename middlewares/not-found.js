const path = require("path");

const notFound = (req, res) => {
  res.sendFile(path.resolve(__dirname, "../public/404.html"));
};

module.exports = notFound;
