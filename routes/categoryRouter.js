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


router.get('/categories/:id',async(req,res)=>{
  try{
     const categoriesid=await Cat.findById(req.params.id);
     res.json(categoriesid);
  }catch(err){
    res.status(400).json({message:err.message});
  }
});



router.delete('/categories/delect/:id',async(req,res)=>{
  const {id}=req.params;
  const catDelete=await Cat.findById(id);
  if(!catDelete){
    return res.status(404).json({ message: "Categories not found" });
  }
  await Cat.findByIdAndDelete(id);
  res.status(200).json({message: "Categories deleted successfully"})

})






// router.get('/categories/:id', async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);
//     if (category == null) {
//       return res.status(404).json({ message: 'Category not found' });
//     }
//     res.json(category);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

module.exports = router;