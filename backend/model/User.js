const mongoose = require('mongoose');
const { Schema } = mongoose;
  
const userSchema = new Schema(
    {
        name:{type:String,required:true,}, // String is shorthand for {type: String}
        email: {type:String,required:true,},
        password:  String,
        date:{type:Date,default:Date.now} 
    }
); 
module.exports = mongoose.model("user",userSchema)