const express = require("express");
const router = express();
const Cat = require("../models/Category");

// router.post("/Category-insart", async (req, res) => {
//   try {
//     const Category = await Cat.create(req.body);
//     res.status(200).json(Category);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// });

router.post("/Category-insart", async (req, res) => {
  const category = new Cat({
    name: req.body.name,
    subcategories: req.body.subcategories, // Expecting an array of subcategories
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;