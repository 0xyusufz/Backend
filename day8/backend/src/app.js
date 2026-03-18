const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()  // intance of the express
app.use(express.json())   // middle ware

// post api
app.post("/api/notes",async(req,res)=>{
    const {title,description} = req.body
    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"note created successfuly",
        note
    })
})

// get api
app.get("/api/notes",async (req,res)=>{
    const allNotes = await noteModel.find()
    res.status(200).json({
        message: "fetched all notes",
        allNotes
    })
})

// delete

app.delete("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const deleteNote = await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"note deleted successfully",
        deleteNote
    })
})

//  patch

app.patch("/api/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {description} = req.body
    const updatedNotes = await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"description update successfully",
        updatedNotes
    })
})
module.exports = app


