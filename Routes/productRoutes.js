const express = require("express");
const router = express.Router();
const Product = require("../Model/product");


// routes to get all the product
router.get('/products',async(req,res)=>{
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        console.error(error)
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router;