const express = require("express")
const app = express()   //instance of a express
app.use(express.json())  //middleware
let notes = []
//  post method
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"notes created successfully"
    })
})
// get method
app.get("/notes",(req,res)=>{
    res.status(200).json({
        notes: notes
    })
})
// delete
app.delete("/notes/:id",(req,res)=>{
    delete notes[req.params.id]
    res.status(204).json({
        message:"notes deleted successfully"
    })
})
// patch
app.patch("/notes/:id",(req,res)=>{
    notes[req.params.id].desc= req.body.desc
})
module.exports = app
