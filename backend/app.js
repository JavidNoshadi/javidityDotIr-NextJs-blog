const express = require("express")
const app = express()
const mongoose = require("mongoose")

let javid = {
    "name" : "javid",
}

app.get("/", async(req,res)=>{
    res.json(javid)
})

app.listen(4000 ,()=>{
    console.log("backend is up on 3000")
})