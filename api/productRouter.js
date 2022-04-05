const express = require("express");

const productRouter = express.Router();

productRouter.get("/", (req, res) => {
  res.send("will send products");
});

module.exports = productRouter;
