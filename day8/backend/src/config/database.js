const mongoose = require("mongoose")

const connectionDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database is conneted successfully")
    }catch(e){
        console.log("failed to connect database")
    }
}
module.exports = connectionDb