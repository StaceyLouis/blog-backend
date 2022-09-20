const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")

require("dotenv/config")

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req,res)=>{
    res.send("Hello Server")
})

//connect to mongodb

mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log("connected to db")
})

//listening on port 8000
app.listen(8000, ()=>{
    console.log("connected to server")

})