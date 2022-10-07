/** @format */

const express = require("express");
const routes = express.Router();
routes.get("/students", (req, res) => {
  res.send({ type: "Get Request" });
});
routes.post("/students", (req, res) => {
  res.send({ type: "" });
});
module.exports = routes;
