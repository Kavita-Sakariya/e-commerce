const express = require("express");
const app = express();
const dotenv = require("env").config();
const port = 3000;

app.use(express.json())
app.use("/api/users",require("./routers/category"))
app.listen(port,()=>{
    console.log(
        `port is running in ${port}`
    ); 
})