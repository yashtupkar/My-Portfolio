const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    heroImg: {
      type: String,
      required: true,
    },
    linkden: {
      type: String,
    },
    github: {
      type: String,
    },
    instagram: {
      type: String,
    },
    fiver: {
      type: String,
    },
    twitter: {
      type: String,
    },

    technologies: [
      {
        title: String,
        icon: String,
        color: String,
      },
    ],
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    company: {
      type: String,
    },
    availableForWork: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "hero_section" }
);

// Export the model
module.exports = mongoose.model("Hero", HeroSchema);
