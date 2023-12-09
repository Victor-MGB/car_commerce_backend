const express = require('express');
const router = express.Router();
const User = require('../Model/user');

// routes to get all the product
// router.get('/products',async(req,res)=>{
//     try{
//         const products = await Product.find();
//         res.json(products);
//     }catch(error){
//         console.error(error)
//         res.status(500).json({error: 'Internal server error'})
//     }
// })

// router to add a product to the cart
router.post('/add-to-cart',async(req,res)=>{
    try{
        const {userId,productId,quantity}=req.body;
        const cartItem = new Cart({userId,productId,quantity})
        await cartItem.save();
        res.json({success:true,message:'Product added to cart successfully'})
    }catch(error){
        console.error(error);
        res.status(500).json({error:'internal server error'})
    }
})

// routes to get all user
router.get('/users',async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            error:'internal server error'
        })
    }
})

// to get specific id
router.get('/users/:userId',async(req,res)=>{
    try{
        const user =await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({
                error:'User not found'
            })
        }
        res.json(user);
    }catch(error){
        console.error(error);
        res.json({
            error:'internal server error'
        })
    }
})

//route to add a new user
router.post('/users',async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        const newUser = new User({username,email,password});
        await newUser.save();
        res.json({success:true,message:'user created successfully'})
    }catch(error){
        console.error(error);
        res.status(500).json({error:'internal server error'})
    }
})

//get all item in the user's cart 
router.get('/cart/:userId',async(req,res)=>{
    try{
        const cartItem = await new Cart.find({userId:req.params.userId}).populate('productId');
        res.json(cartItem);
    }catch(error){
        console.error(error);
        res.status(500).json({error:'internal server error'})
    }
})

//Route to update the quantity of a product in the cart
router.put('/cart/:cartItemId',async(req,res)=>{
    try{
        const {quantity}=req.body;
        await Cart.findByIdAndUpdate(req.params.cartItemId,{quantity});
        res.json({success:true,message:'cart Item Updated successfully'});
    }catch(error){
        console.error(error);
        res.status(500).json({error:'inter server error'})
    }
})

router.delete('/cart/:cartItemId',async(req,res)=>{
    try{
        await Cart.findByIdAndRemove(req.params.cartItemId);
        res.json({success:true,message:'product removed successfully'});
    }catch(error){
        console.error(error);
        res.status(500).json({error:'internal server error'})
    }
})

module.exports = router;

