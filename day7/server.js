require("dotenv").config()
const app = require("./src/app")
const connectingDb = require("./src/config/database")



connectingDb()

app.listen(process.env.PORT,()=>{
    console.log(`this server is running at port ${process.env.PORT}`)
})