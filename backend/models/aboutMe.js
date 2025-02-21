const mongoose = require("mongoose");

const AboutMeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String, required: true },
  profileImage: { type: String },

  experience: [
    {
      company: { type: String, required: true },
      position: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date }, // Null if currently working
      description: { type: String },
    },
  ],

  education: [
    {
      institution: { type: String, required: true },
      degree: { type: String, required: true },
      fieldOfStudy: { type: String },
      startDate: { type: Date, required: true },
      endDate: { type: Date },
    },
  ],

  skills: [{ type: String }], // Array of skill names

  awards: [
    {
      title: { type: String, required: true },
      organization: { type: String },
      year: { type: Number },
      description: { type: String },
    },
  ],

  stats: [
    {
      value: { type: String, required: true },
      label: { type: String, required: true },
    },
  ],
});

// Create the model from the schema
const AboutMe = mongoose.model("AboutMe", AboutMeSchema);

module.exports = AboutMe; // Export the model
