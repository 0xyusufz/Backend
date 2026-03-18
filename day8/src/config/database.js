const mongoose = require("mongoose")

const connectingDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully")
    }catch(e){
        console.log("database not connected")
    }
}
module.exports = connectingDb