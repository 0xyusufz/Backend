const mongoose = require("mongoose")

const dbConnection = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfuly")
    }catch(e){
        console.log("failed to connect database ")
    }
}

module.exports = dbConnection