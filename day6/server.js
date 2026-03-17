const app = require("./src/app")
const mongoose = require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://yusuf:Yusuffatah%4009@cluster0.zypo3og.mongodb.net/day-6")
        console.log("connected to database")
    }catch(e){
        console.log("failed to connect with database")
    }
}
connectDB()
port =3000
app.listen(port,()=>{
    console.log(`this server is running at port ${port}`)
})

