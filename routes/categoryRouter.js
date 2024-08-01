const express = require("express");
const router = express();
const Cat = require("../models/Category");

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



router.get('/categories', async (req, res) => {
  try {
    const categories = await Cat.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/ctegories/:id',async (req,res)=>{
  try{
     const categoriesid=await Cat.findById(req.params.id);
     res.status(200).json(categoriesid);
  }catch(err){
    res.status(400).json(categoriesid);
  }
})


module.exports = router;