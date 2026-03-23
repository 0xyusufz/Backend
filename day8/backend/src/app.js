const express = require("express")
const cors = require("cors")
const noteModel = require("./models/notes.model")
const app = express()   //instance of the express
app.use(express.json())  //middleware
app.use(cors())  // cross request api


// post method
app.post("/api/notes",async(req,res)=>{
    const {title,description}=req.body
    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"notes created successfully",
        note
    })
})

// get method

app.get("/api/notes",async(req,res)=>{
    const allNotes = await noteModel.find()
    res.status(200).json({
        message:"all notes fetched",
        allNotes
    })
})

// delete method

app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"notes deleted successfully"
    })
})

// patch method

app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {title,description}= req.body
    await noteModel.findByIdAndUpdate(id,{title,description})
    res.status(200).json({
        message:"note updated successfully"
    })
})

module.exports = app