require("dotenv").config()
const app = require("./src/app")
const connectingDb = require("./src/config/database")



connectingDb()

const PORT = 3000
app.listen(PORT,()=>{
    console.log(`this server is running at port ${PORT}`)
})