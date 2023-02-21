const mongoose = require("mongoose")
const mongoUrl = "mongodb://localhost:27017/inotebook?directConnection=true&readPreference=primary&appname=MongoDB%20Compass&ssl=false"
mongoose.set('strictQuery', false);
const connectToMongo = ()=>{
    mongoose.connect(mongoUrl,()=>{
        console.log("Connected Successfully")
    })
}
module.exports = connectToMongo