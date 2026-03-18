const mongoose = require("mongoose")

// schema banaya kyu ye define karega kis format mein database mein data save hoga
const noteSchema =new mongoose.Schema({
    title:String,
    description:String
})
//  notemodel yaha pe class hai jisse aage jaake object banenge jo database mein save hoga 
// notes collection ka naam hai
// noteschema ek tarah se constructor ka kaam karga
const noteModel = mongoose.model("notes",noteSchema)

module.exports = noteModel