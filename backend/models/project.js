const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Project title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Project description is required"],
    trim: true,
  },
  technologies: {
    type: [String], // Array of strings to store tech stack used
    required: [true, "At least one technology is required"],
  },
  tags: {
    type: String, // Optional tags array
     // Ensures tags field exists
  },
  liveDemoLink: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return !v || /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  githubLink: {
    type: String,
    trim: true,
    validate: {
      validator: function (v) {
        return !v || /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(v);
      },
      message: (props) => `${props.value} is not a valid URL!`,
    },
  },
  imageUrl: {
    type: String, // Can be a URL or local file path
    trim: true,
  },
  companyName: {
    type: String,
    trim: true,
  },
  display: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets creation date
  },
});

// Create & Export the Model
const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
