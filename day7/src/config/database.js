const mongoose = require("mongoose")
const connectingDb =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("dataabse is connected successfully")
    }catch(e){
        console.log("dataabse not connected due to ",e)
    }
}

module.exports = connectingDb