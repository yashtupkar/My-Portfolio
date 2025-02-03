const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const connectDB = require("./connection/connection");

require("./connection/connection");
connectDB();

app.use(cors());
app.use(express.json());
const Project = require("./routes/project");

app.use("/api/v1", Project);



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})