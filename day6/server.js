const app = require("./src/app")
const mongoose = require("mongoose")
const url = require("./src/Database/link")
async function connectDB(){
    try{
        await mongoose.connect(url)
        console.log("database successfully connected")
    }catch(e){
        console.log("error while connecting database")
    }
}
connectDB()



const PORT =3000
app.listen(PORT,()=>{
    console.log(`This Server is running at port ${PORT} `)
})