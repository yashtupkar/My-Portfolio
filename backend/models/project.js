const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String], // Array of strings to store tech stack used
    required: true,
  },
  liveDemoLink: {
    type: String, // URL for live demo
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v); // Valid URL regex
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  githubLink: {
    type: String, // URL for GitHub repository
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v); // Valid URL regex
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  imageUrl: {
    type: String, // URL of the project's image
    validate: {
      validator: function (v) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(v); // Valid URL regex
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically add the creation date
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
