const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());



// routes 

app.get('/', (req, res) => {
    res.send("Server Is running for Sports")
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
