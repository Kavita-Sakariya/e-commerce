const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 1000;


app.use(express.json())
app.use("/api/products",require("./routers/products"))
app.listen(port,()=>{
    console.log(
        `port is running in ${port}`
    ); 
})