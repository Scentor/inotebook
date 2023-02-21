const mongoose = require('mongoose');
const { Schema } = mongoose;
  
const userSchema = new Schema(
    {
        name:{type:String}, // String is shorthand for {type: String}
        email: {type:String},
        password:  String,
        date:{type:Date,default:Date.now} 
    }
); 
module.exports = mongoose.model("user",userSchema)