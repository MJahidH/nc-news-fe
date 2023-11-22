const express = require("express");
const { getTopics } = require("./controllers/topics.controllers");
const app = express();
const { getApi } = require("./controllers/api.controller");

app.get("/api", getApi);

app.get("/api/topics", getTopics);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send(err);
});

//end point is the url path

module.exports = app;
