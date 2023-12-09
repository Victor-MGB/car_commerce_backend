const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  name: { type: String, required: true },
  productDetails: { type: String },
  image: { type: String },
  price: { type: Number },
  year: { type: Number },
  mileage: { type: Number },
  color: { type: String },
  fuelType: { type: String },
  transmission: { type: String },
  vin: { type: String, unique: true, required: true },
  condition: { type: String },
  features: { type: String },
  sellerInfo: {
    name: { type: String },
    location: { type: String },
    contact: { type: String },
  },
  availability: { type: Boolean },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
