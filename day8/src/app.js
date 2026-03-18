const express = require("express")
const noteModel= require("./models/notes.model")
const app =express()   //instance of a express
app.use(express.json())

app.post("/notes",async(req,res)=>{
    const {title,description} = req.body
    const note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message:"notes created successfully",
        note
    })
})

app.get("/notes",async (req,res)=>{
    const allNotes = await noteModel.find()
    res.status(200).json({
        message:"all notes fetched successfully",
        allNotes
    })
})

module.exports =app 