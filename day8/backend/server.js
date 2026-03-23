require("dotenv").config()
const app = require("./src/app")
const connectionDb = require("./src/config/database")

connectionDb()  //running database

//starting a server
app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`)
})

