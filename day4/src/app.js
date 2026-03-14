const express = require("express")
const app = express()   //instance of a express

app.use(express.json()) // middleware

let notes =[]
// post
app.post("/notes",(req,res)=>{
    notes.push(req.body)
    res.send("notes created")
})

// get
app.get("/notes",(req,res)=>{
    res.send(notes)
})

// delete
app.delete("/notes/:id",(req,res)=>{
    delete notes[req.params.id]
    res.send(notes)
})

// patch
app.patch("/notes/:id",(req,res)=>{
    notes[req.params.id].desc = req.body.desc
    res.send("notes updated succesfully")
})

module.exports = app