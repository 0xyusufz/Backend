const express = require("express")
const noteModel = require("../models/notes.model")
const cors = require("cors")
const app = express()  //instance of the express
app.use(express.json())   //middleware
app.use(cors())

// post method
app.post("/api/notes",async(req,res)=>{
    const {title,description} = req.body
    const note =await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"notes created successfully",
        note
    })
})


// get method
app.get("/api/notes",async(req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        notes
    })
})

// delete method

app.delete("/api/notes/:id", async(req,res)=>{
    const id = req.params.id
    const deletedNotes =await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"notes successfully deleted",
        deletedNotes
    })
})

// patch method

app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {description} = req.body
    const updatedNotes =await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"description updated successfully",
        updatedNotes
    })
})
module.exports = app   //exporting to server.js