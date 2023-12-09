const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId, ref:'Product'
    },
    quantity:Number
});

const Cart = mongoose.model('Cart',cartSchema)
module.exports = Cart;