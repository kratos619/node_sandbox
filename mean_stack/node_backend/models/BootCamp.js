const mongoose = require("mongoose");

const BootCampSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name field required"],
    unique: [true, "is alredy taken"],
    trim: true,
    maxlength: [50, "Name can not be more thane 50 characters"],
  },
  slug: String,
  description: {
    type: String,
    required: [true, "description field required"],
    maxlength: [1500, "Name can not be more thane 1500 characters"],
  },
  website: {
    type: String,
    unique: true,
    required: [true, "website required"],
    trim: true,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "use valid url with http or https",
    ],
    maxlength: [200, "website can not be more than 200"],
  },
  phone: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
    match: [
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "enter valid email",
    ],
  },
  address: {
    type: String,
    required: [true, "Address field required"],
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  careers: {
    // Array of strings
    type: [String],
    required: true,
    enum: [
      "Web Development",
      "Mobile Development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other",
    ],
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating must can not be more than 10"],
  },
  averageCost: Number,
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  housing: {
    type: Boolean,
    default: false,
  },
  jobGuarantee: {
    type: Boolean,
    default: false,
  },
  acceptGi: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
});

module.exports = mongoose.model("Bootcamp", BootCampSchema);
