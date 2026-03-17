const express = require("express")
const app= express()    //instance of a express
app.use(express.json())   //middleware
let notes =[]  
//post method
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"notes  created sucessfully"
    })
})
// get method
app.get("/notes",(req,res)=>{
    res.status(200).json({
        note : notes
    })
})
//delete method
app.delete("/notes/:id",(req,res)=>{
    delete notes[req.params.id]
    res.status(204)
})
// patch method
app.patch("/notes/:id",(req,res)=>{
    notes[req.params.id].desc = req.body.desc
    res.status(200).json({
        message:"desciption updated successfully"
    })
})
module.exports = app