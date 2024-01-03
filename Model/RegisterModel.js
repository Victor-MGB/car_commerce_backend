const mongoose = require("mongoose");

const RegisterModelSchema = mongoose.Schema({
  fullName: String,
  email: String,
  userName: String,
  password: String,
  checked: { type: Boolean, default: true },
});

const RegisterModel = mongoose.model("register", RegisterModelSchema);
module.exports = RegisterModel;
