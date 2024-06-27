const express = require("express");
const router = express();
const Product = require("../models/Product");

router.get("/product", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products.reverse());
  } catch (error) {
    res.status(500).json({
      message: error.messages,
    });
  }
});

router.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const productDelect = await Product.findById(id);

  if (!productDelect) {
    return res.status(404).json({ message: "Product not found" });
  }

  await Product.findByIdAndDelete(id);
  res.status(200).json({ message: "Product deleted successfully" });
});

module.exports = router;
