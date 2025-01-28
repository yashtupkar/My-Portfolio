const express = require('express');

const app = express();
require("dotenv").config();
const connectDB = require("./connection/connection");

require("./connection/connection");
connectDB();

app.get('/', (req, res)=> {
    res.send('Hello World!');
});
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})