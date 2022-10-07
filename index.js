/** @format */

const express = require("express");
const routes = require("./routes/API");
const app = express();
app.use(routes);
app.listen(process.env.port || 4000, function () {
  console.log("Now LIstening fro requests on : http://localhost:4000");
});
