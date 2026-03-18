const express = require("express")
const noteModel = require("./models/note.model")
const app = express()  //intance of the express
app.use(express.json())  // middleware


// creating post API
app.post("/notes",async(req,res)=>{
    const {title,description} =req.body
    const note = await  noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created successfully",
        note
    })
})
//  creating get API
app.get("/notes",async(req,res)=>{
})
module.exports =app //exporting app to server to run