const express = require("express");
const { getProducts } = require("../db/products");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const products = await getProducts();
  console.log(products);
  res.send({ products });
});

module.exports = productRouter;
