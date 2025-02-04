const express = require('express');
const path = require("path");

const cors = require('cors');
const app = express();
require("dotenv").config();
const connectDB = require("./connection/connection");
const upload = require("./multer/upload");

require("./connection/connection");
connectDB();
const Project = require("./routes/project");
const Hero = require("./routes/heroSection");
const Testimonial = require("./routes/testimonial");
app.use(cors());
app.use(express.json());



app.use("/api/v1", Project);
app.use("/api/v1", Hero);
app.use("/api/v1", Testimonial);



app.use("/uploads", express.static(path.join(__dirname, "uploads")));


app.post("/upload", upload.single("file"), (req, res) => {
    console.log("File Uploaded:", req.file); // Debugging

    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    res.json({ filePath: `/uploads/${req.file.filename}` });
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})