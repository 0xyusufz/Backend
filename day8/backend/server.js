require("dotenv").config()
const app = require("./src/app")
const dbConnection = require("./config/database")

dbConnection()
app.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`)
})
