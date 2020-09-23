const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field required"],
    maxlength: [50, "Name can not be more thane 50 characters"],
  },
  email: {
    type: String,
    unique: [true, "alredy taken"],
    match: [
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "enter valid email",
    ],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  password: {
    type: String,
    required: [true, "password field required"],
    min: [1, "Rating must be at least 1"],
    select: false,
  },
  resetPasswordToken: String,
  resetPasswordExpire: String,
  created_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("User", UserSchema);
