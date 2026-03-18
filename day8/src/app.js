const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()   //instance of the express
app.use(express.json()) //middleware


app.post("/notes",async(req,res)=>{
    const {title,description} = req.body
    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message: "note created successfully",
        note
    })
})

app.get("/notes",async(req,res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"all notes fetched successfully",
        notes
    })
})


app.delete("/notes/:id",async(req,res)=>{
    const id=req.params.id
    const note = await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"notes deleted successfully",
        note
    })
})
app.patch("/notes/:id",async(req,res)=>{
    const id = req.params.id
    const {description} =req.body
    const note = await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"description updated",
        note
    })
})
module.exports = app 