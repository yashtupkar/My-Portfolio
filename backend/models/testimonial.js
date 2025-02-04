const mongoose = require("mongoose");


const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    ratings: {
      type: Number,
     
      min: 1,
      max: 5,
    },
    date: {
      type: Date,
      default: Date.now,
        },
        display: {
        type: Boolean,
        default: false,
    },
    image: {
      type: String, 
      required: false, 
    },
  },
  {
    timestamps: true,
  }
);


const Testimonial = mongoose.model("Testimonial", testimonialSchema);

module.exports = Testimonial;
