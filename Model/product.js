const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
   model:String,
   name:String,
   productDetails:String,
   image:String,
   price:Number,
   year:Number,
   mileage: Number,
   color: String,
   fuelType: String,
   transmission:String,
   vin:String,
   condition:String,
   features: String,
   
   sellerInfo:{
    name:String,
    location:String,
    contact:String
   }
})
const Product = mongoose.model('Product',productSchema);
module.exports = Product