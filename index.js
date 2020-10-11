const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

app.use(express.static(__dirname + "./"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "main.html"));
});

app.get("/dom.js", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dom.js"));
});

app.get("/stylish.css", (req, res) => {
  res.sendFile(path.resolve(__dirname, "stylish.css"));
});

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

module.exports = {
  port,
};
