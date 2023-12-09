const Cart = require('../Model/cart');
const express = require("express");
const router = express.Router();

router.post("/add-to-cart", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cartItem = new Cart({ userId, productId, quantity });
    await cartItem.save();
    res.json({ success: true, message: "Product added to cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "inter server error" });
  }
});

module.exports = router;